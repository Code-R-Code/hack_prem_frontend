import React, { useState, useEffect } from 'react';
import Leaders from './Leaders';
import Pagination from './Pagination';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { useHistory } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const Hackboard = () => {
	const [ teams, setTeams ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ currentPage, setCurrentPage ] = useState(1);
	const [ request, setRequest ] = useState('https://backhackerprem.herokuapp.com/sort/score');
	const [ doNothing, setDoNothing ] = useState(false);
	const [ teamsPerPage ] = useState(55);

	let history = useHistory();

	useEffect(
		() => {
			const fetchTeams = async () => {
				setLoading(true);

				try {
					const res = await axios.get(request);
					setTeams(res.data);
					setLoading(false);
					setDoNothing(false);
				} catch (e) {
					console.log({ message: e });
					setDoNothing(true);
				}
			};

			fetchTeams();
		},
		[ request ]
	);

	console.log(teams);

	// Get current Leaders
	const indexOfLastTeam = currentPage * teamsPerPage;
	const indexOfFirstTeam = indexOfLastTeam - teamsPerPage;
	const currentTeams = teams.slice(indexOfFirstTeam, indexOfLastTeam);

	//Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	//Select teams
	let clickedTimes = 0;
	const s_teams = [];
	const selected = async (t_id, t_name) => {
		clickedTimes += 1;
		if (clickedTimes === 1)
			s_teams.push({
				id: t_id,
				name: t_name
			});
		if (clickedTimes === 2) {
			s_teams.push({
				id: t_id,
				name: t_name
			});
			history.push({
				pathname: '/match',
				state: { detail: s_teams }
			});
			console.log(s_teams);
		}
	};

	//Change sort query
	const scoreSort = async () => await setRequest('https://backhackerprem.herokuapp.com/sort/score');

	const nameSort = async () => await setRequest('https://backhackerprem.herokuapp.com/sort/name');

	//Change search query
	const searchBox = async () => {
		let searchQuery = document.getElementById('search-bar').value;
		console.log(searchQuery);
		if (searchQuery == null) {
			console.log('query is null');
		} else {
			if (+searchQuery === +searchQuery) {
				console.log('is Number');

				await setRequest(`https://backhackerprem.herokuapp.com/search/score/${searchQuery}`);
			} else {
				console.log('is not a num');
				await setRequest(`https://backhackerprem.herokuapp.com/search/name/${searchQuery}`);
			}
		}
	};

	return (
		<div className="container">
			<Card className="card-board mt-2 mb-4">
				<h2 className="text-primary mb-4 text-1 mt-4">Hackboard >_</h2>
				<Container>
					<Row className="justify-content-between">
						<Dropdown className="mb-4">
							<DropdownButton id="dropdown-basic-button" title="Sort by">
								<Dropdown.Item onClick={nameSort}>Name</Dropdown.Item>
								<Dropdown.Item onClick={scoreSort}>Score</Dropdown.Item>
							</DropdownButton>
						</Dropdown>

						<Form inline>
							<InputGroup className="mb-2 mr-sm-2">
								<FormControl type="text" placeholder="Name or score" id="search-bar" />
								<InputGroup.Append>
									<Button variant="outline-success" onClick={searchBox}>
										Search
									</Button>
								</InputGroup.Append>
							</InputGroup>
						</Form>
					</Row>
				</Container>
				<div className="overflow-auto table-height mb-3">
					<Leaders teams={currentTeams} loading={loading} selected={selected} doNothing={doNothing} />
				</div>
				<Pagination teamsPerPage={teamsPerPage} totalTeams={teams.length} paginate={paginate} />
			</Card>
		</div>
	);
};

export default Hackboard;
