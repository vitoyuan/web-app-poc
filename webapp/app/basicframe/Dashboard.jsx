import React from 'react';
import { Txn, TxnForm } from '../trade';

class Dashboard extends React.Component {
	
	render() {
		
		return(<div>
			<TxnForm />
			<hr />
			<Txn />
		</div>);
	}
}

export default Dashboard;