import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Dashboard, Upcoming } from './basicframe';

class App extends React.Component {

	render() {
		
		return (
			<Router>
				<div id="wrapper">
					<nav className="navbar navbar-default navbar-static-top" role="navigation" style={{marginBottom:"0px"}}>
						<Link to={'/'}>
							Dashboard
						</Link>
						<br />
						<Link to={'/upcoming-feature'}>
							Upcoming Feature
						</Link>
					</nav>
					<div id="page-wrapper">
						<Route path='/' component={Dashboard} exact />
						<Route path='/upcoming-feature' component={Upcoming} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;