import React from 'react';

class Txn extends React.Component {

	constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

	render() {

		let txns = [];
		txns.push(<tr>
			<td>BTC_JPY</td>
			<td>BUY</td>
			<td>700000</td>
			<td>1.0</td>
		</tr>);

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

export default Txn;