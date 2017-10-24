import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Dashboard, Dashboard2 } from './basicframe';

class App extends React.Component {

	render() {
		
		return (
			<Router>
				<div>
					<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
						<div className="container-fluid">
			        <div className="navbar-header">
		          	<Link className="navbar-brand" to={'/'}>
		          		Logo
		          	</Link>
			        </div>
			      </div>
					</nav>
					<div className="container-fluid">
						<div className="row">
			        <div className="col-md-2 sidebar">
			          <ul className="nav nav-sidebar">
			            <li><Link to={'/'}>Dashboard 1</Link></li>
			            <li><Link to={'/dashboard2'}>Dashboard 2</Link></li>
								</ul>
							</div>
							<div className="col-md-10" main>
								<Route path='/' component={Dashboard} exact />
								<Route path='/dashboard2' component={Dashboard2} />
							</div>
						</div>
  				</div>
				</div>
			</Router>
		);
	}
}

export default App;