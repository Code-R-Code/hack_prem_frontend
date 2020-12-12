import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const MatchBoard = () => {
	const location = useLocation();
	console.log(location.state.detail[0].name);
	console.log(location.state.detail[1].name);
	let history = useHistory();

	const onTeam1Win = async () => {
		await axios.patch(
			`https://backhackerprem.herokuapp.com/match/team1/${location.state.detail[0].id}&${location.state.detail[1]
				.id}`
		);
		history.push('/');
	};

	const onTeam2Win = async () => {
		await axios.patch(
			`https://backhackerprem.herokuapp.com/match/team2/${location.state.detail[0].id}&${location.state.detail[1]
				.id}`
		);
		history.push('/');
	};

	const onTie = async () => {
		await axios.patch(
			`https://backhackerprem.herokuapp.com/match/tie/${location.state.detail[0].id}&${location.state.detail[1]
				.id}`
		);
		history.push('/');
	};

	return (
		<Container>
			<Row>
				<Col>
					<Card className="mt-4 mb-5 card-board">
						<h3 className="text-center heading-match mt-4 mb-2">Match</h3>
						<Container>
							<Row className="justify-content-center">
								<hr className="separator mb-4" />
								<Col sm={5}>
									<Card className="mb-4 mt-4">
										<Card.Header>
											<h2 className="text-center text-1 mt-2 mb-2">Team 1</h2>
										</Card.Header>
										<h3 className="text-center heading-match text-primary mt-5">
											{location.state.detail[0].name}
										</h3>
										<Container className="mt-4 mb-4">
											<Row className="justify-content-center">
												<Col sm={3}>
													<div className="text-center">
														<Button onClick={onTeam1Win}> Win </Button>
													</div>
												</Col>
											</Row>
										</Container>
									</Card>
								</Col>
								<Col sm={2} className="mt-5">
									<Container>
										<Row className="justify-content-center align-items-center">
											<Col sm={6} className=" my-auto">
												<div className="text-center">
													<h1 className="logo-name display-3 ml-3">v/S</h1>
													<Button className="mt-3 mb-4" onClick={onTie}>
														Tie
													</Button>
												</div>
											</Col>
										</Row>
									</Container>
								</Col>
								<Col sm={5}>
									<Card className="mb-4 mt-4">
										<Card.Header>
											<h2 className="text-center text-1 mt-2 mb-2">Team 2</h2>
										</Card.Header>
										<h3 className="text-center heading-match text-primary mt-5">
											{location.state.detail[1].name}
										</h3>
										<Container className="mt-4 mb-4">
											<Row className="justify-content-center">
												<Col sm={3}>
													<div className="text-center">
														<Button onClick={onTeam2Win}> Win </Button>
													</div>
												</Col>
											</Row>
										</Container>
									</Card>
								</Col>
							</Row>
						</Container>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default MatchBoard;
