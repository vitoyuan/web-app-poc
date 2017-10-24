import React from 'react';
import { Txn, TxnForm } from '../trade';
import { connect } from 'react-redux';
import { readTxns } from '../trade';

class Dashboard extends React.Component {
	
	componentDidMount() {
		this.props.dispatch(readTxns());
	}

	render() {
		return(<div>
			<TxnForm />
			<hr />
			<Txn />
		</div>);
	}
}

export default connect(null)(Dashboard);