import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

const CreateTeam = () => {
	let history = useHistory();

	const teamCreate = async () => {
		let t_name = document.getElementById('formTeam').value;
		if (t_name === '') {
			console.log('Enter the team name');
			swal({
				title: 'OOPS !!!',
				text: 'PLEASE ENTER A TEAM NAME',
				icon: 'warning',
				dangerMode: true
			});
		} else {
			console.log(t_name);
			axios({
				method: 'POST',
				url: 'https://backhackerprem.herokuapp.com/team/createTeam',
				data: {
					team_name: t_name,
					wins: 0,
					losses: 0,
					ties: 0,
					score: 0
				}
			});
			history.push('/');
		}
	};

	return (
		<Container className="mt-5">
			<Row>
				<Col>
					<Container className="mt-5">
						<Row>
							<Col>
								<Container className="mt-5">
									<Row className="justify-content-center">
										<Col md={10}>
											<Card className="card-enter-team">
												<Card.Header>
													<h3 className="text-1 text-center">Enter Your Team</h3>
												</Card.Header>
												<Card.Body>
													<div className="text-center">
														<Form bg="transparent">
															<Form.Group controlId="formTeam" bg="transparent">
																<Form.Label className="text-center text-dark logo-name">
																	Team Name
																</Form.Label>
																<Container>
																	<Row className="justify-content-center mt-3 mb-4">
																		<Col lg={8}>
																			<Form.Control
																				type="text"
																				onSubmit={teamCreate}
																			/>
																		</Col>
																	</Row>
																</Container>
															</Form.Group>
														</Form>
														<Button onClick={teamCreate}>create team</Button>
													</div>
												</Card.Body>
											</Card>
										</Col>
									</Row>
								</Container>
							</Col>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default CreateTeam;
