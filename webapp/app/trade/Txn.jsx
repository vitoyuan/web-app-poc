import React from 'react';
import { connect } from 'react-redux';

class Txn extends React.Component {

	constructor(props) {
    super(props);
  }

	render() {

		let txns = [];
    for(let txn of this.props.txns) {
      txns.push(<tr key={txn[0]}>
        <td>{txn[1].get('txnId')}</td>
        <td>{txn[1].get('tradecode')}</td>
        <td>{txn[1].get('side')}</td>
        <td>{txn[1].get('price')}</td>
        <td>{txn[1].get('size')}</td>
      </tr>);
    }
		
		return(<div>
			<div className="panel panel-default">
        <div className="panel-heading">
          <i className="fa fa-user fa-fw"></i>Txn List
        </div>
        <div className="panel-body">
          <div className="table-responsive dataTables_wrapper">
            <table className="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th>Txn Id</th>
                  <th>Trade Code</th>
                  <th>Side</th>
                  <th>Price</th>
                  <th>Size</th>
                </tr>
              </thead>
              <tbody>
                {txns}
              </tbody>
            </table>
          </div>
        </div> 
      </div>
		</div>);
	}
}

export default connect(state => {
  return {
    txns: state.get('txns')
  }
})(Txn);