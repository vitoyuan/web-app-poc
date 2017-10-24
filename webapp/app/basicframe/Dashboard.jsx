import React from 'react';
import { Txn, TxnForm } from '../trade';

class Dashboard extends React.Component {
	
	render() {
		
		return(<div>
			<Txn />
			<TxnForm />
		</div>);
	}
}

export default Dashboard;