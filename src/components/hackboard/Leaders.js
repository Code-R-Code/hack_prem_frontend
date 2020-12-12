import React from 'react';
import Table from 'react-bootstrap/Table';

const Leaders = ({ teams, loading, selected, doNothing }) => {
	if (doNothing === true) {
		return (
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th colSpan="2">Team Name</th>
						<th>Wins</th>
						<th>Losses</th>
						<th>Ties</th>
						<th>Score</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colSpan="7">Wrong Query. Please Try Again.</td>
					</tr>
				</tbody>
			</Table>
		);
	}

	if (loading) {
		return <h2>Loading ... </h2>;
	}

	if (teams.length === 0) {
		return (
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th colSpan="2">Team Name</th>
						<th>Wins</th>
						<th>Losses</th>
						<th>Ties</th>
						<th>Score</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colSpan="7">No Record</td>
					</tr>
				</tbody>
			</Table>
		);
	}

	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>#</th>
					<th colSpan="2">Team Name</th>
					<th>Wins</th>
					<th>Losses</th>
					<th>Ties</th>
					<th>Score</th>
				</tr>
			</thead>
			<tbody>
				{teams.map((team, i) => (
					<tr key={team._id} onClick={async () => await selected(team._id, team.team_name)}>
						<td>{i + 1}</td>
						<td colSpan="2">{team.team_name}</td>
						<td>{team.wins}</td>
						<td>{team.losses}</td>
						<td>{team.ties}</td>
						<td>{team.score}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default Leaders;
