import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function NavComponent() {
	return (
		<div>
			<Navbar bg="dark" expand="md">
				<Navbar.Brand className="logo-name ">
					<Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
						Hacker PL
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end mr-5">
					<div>
						<Nav className="mr-auto">
							<Nav.Link className="mr-5 active nav-texts">
								<Link to="/" style={{ textDecoration: 'none' }} className="text-light">
									HACK_TABLE
								</Link>
							</Nav.Link>
							<Nav.Link className="nav-texts">
								<Link to="/team" style={{ textDecoration: 'none' }} className="text-light">
									+CREATE_TEAM
								</Link>
							</Nav.Link>
						</Nav>
					</div>
				</Navbar.Collapse>
			</Navbar>
			<Container>
				<Row className="box row align-items-center" />
			</Container>
		</div>
	);
}

export default NavComponent;
