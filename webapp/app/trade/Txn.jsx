import React from 'react';

class Txn extends React.Component {

	constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

	render() {

		let txns = [];
		txns.push(<li>a</li>);
		txns.push(<li>b</li>);

		return(<div>
			<ul>
				{txns}
			</ul>
		</div>);
	}
}

export default Txn;