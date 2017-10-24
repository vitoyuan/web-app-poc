import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Dashboard, Dashboard2 } from './basicframe';

class App extends React.Component {

	render() {
		
		return (
			<Router>
				<div id="wrapper">
					<nav className="navbar navbar-default navbar-static-top" role="navigation" style={{marginBottom:"0px"}}>
						<Link to={'/'}>
							Dashboard 1
						</Link>
						<br />
						<Link to={'/dashboard2'}>
							Dashboard 2
						</Link>
					</nav>
					<div id="page-wrapper">
						<Route path='/' component={Dashboard} exact />
						<Route path='/dashboard2' component={Dashboard2} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;