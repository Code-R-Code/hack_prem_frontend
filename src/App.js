import React from 'react';
import './App.css';
import NavComponent from './components/Navbar';
import MatchBoard from './components/match/MatchBoard';
import Hackboard from './components/hackboard/Hackboard';
import CreateTeam from './components/createTeam/CreateTeam';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<NavComponent />
				<Switch>
					<Route path="/" exact component={Hackboard} />
					<Route path="/match" exact component={MatchBoard} />
					<Route path="/team" exact component={CreateTeam} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
