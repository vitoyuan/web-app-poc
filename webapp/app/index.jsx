import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

ReactDOM.render(
	(
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRedirect to="/home" />
					<Route path="/home" component={Home} />
					<Route component={PageContent} >
						<Route path="/home/txns" component={Txns} />
					</Route>
				</Route>
			</Router>
		</Provider>
	),
	document.getElementById('app')
);