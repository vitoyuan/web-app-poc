import React from 'react';

class TxnForm extends React.Component {

	constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

	render() {

		let tradeCode = 'BTC_JPY';
		let tradeCodes = [];
		tradeCodes.push(<option value="BTC_JPY">BTC_JPY</option>);
		tradeCodes.push(<option value="BTC_BTG">BTC_BTG</option>);

		let side = 'BUY';
		let sides = [];
		sides.push(<option value="BUY">BUY</option>);
		sides.push(<option value="SELL">SELL</option>);

		return(<div>
			<div className="container-fluid">
				<br />
				<div className="row">
					<div className="col-md-6">
						<div className="form-group input-group">
							<span className="input-group-addon">Trade Code</span>
							<select className="form-control" value={tradeCode}>
								{tradeCodes}
							</select>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group input-group">
							<span className="input-group-addon">Side</span>
							<select className="form-control" value={side}>
								{sides}
							</select>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group input-group">
							<span className="input-group-addon">Price</span>
							<input type="text"
								className="form-control"
								placeholder="Price"
								value={null} />
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group input-group">
							<span className="input-group-addon">Size</span>
							<input type="text"
								className="form-control"
								placeholder="Size"
								value={null} />
						</div>
					</div>
				</div>
				<div className="row">
          <div className="col-md-12">
            <div className="btn-group btn-group-justified">
              <a href="javascript:void(0)" className="btn btn-default btn-justified">Place Order</a>
            </div>
          </div>
        </div>
			</div>
		</div>);
	}
}

export default TxnForm;