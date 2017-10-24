import React from 'react';
import { CommonReactComponent } from '../util';
import { connect } from 'react-redux';
import { createTxn, readTxns } from './action.js';

class TxnForm extends CommonReactComponent {

	constructor(props) {
    super(props);
    this.state = this.getCurrentFormData(props);
  }

  componentWillReceiveProps(props) {
		this.setState(this.getCurrentFormData(props));
	}

	getCurrentFormData(props) {
		return {
			tradeCode: 'BTC_JPY',
			side: 'BUY',
			price: '',
			size: ''
		};
	}

  submitForm(e) {
  	let txn = {
  		tradeCode: this.state.tradeCode,
  		side: this.state.side,
  		price: this.state.price,
  		size: this.state.size
  	};
  	this.props.dispatch(createTxn(txn))
  		.then((x => {
  			this.setState({
  				tradeCode: 'BTC_JPY',
					side: 'BUY',
					price: '',
					size: ''
  			});
  			this.props.dispatch(readTxns());
  		}).bind(this));
  }

	render() {

		let tradeCodes = [];
		tradeCodes.push(<option key={1} value="BTC_JPY">BTC_JPY</option>);
		tradeCodes.push(<option key={2} value="BTC_BTG">BTC_BTG</option>);

		let sides = [];
		sides.push(<option key={1} value="BUY">BUY</option>);
		sides.push(<option key={2} value="SELL">SELL</option>);

		return(<div>
			<div className="container-fluid">
				<br />
				<div className="row">
					<div className="col-md-6">
						<div className="form-group input-group">
							<span className="input-group-addon">Trade Code</span>
							<select className="form-control" 
								value={this.state.tradeCode}
								onChange={this.syncSelect('tradeCode')} >
								{tradeCodes}
							</select>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group input-group">
							<span className="input-group-addon">Side</span>
							<select className="form-control" 
								value={this.state.side}
								onChange={this.syncSelect('side')} >
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
								value={this.state.price}
								onChange={this.syncText('price')} />
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group input-group">
							<span className="input-group-addon">Size</span>
							<input type="text"
								className="form-control"
								placeholder="Size"
								value={this.state.size}
								onChange={this.syncText('size')} />
						</div>
					</div>
				</div>
				<div className="row">
          <div className="col-md-12">
            <div className="btn-group btn-group-justified">
              <a href="javascript:void(0)" className="btn btn-default btn-justified" onClick={this.submitForm.bind(this)}>Place Order</a>
            </div>
          </div>
        </div>
			</div>
		</div>);
	}
}

export default connect(null)(TxnForm);