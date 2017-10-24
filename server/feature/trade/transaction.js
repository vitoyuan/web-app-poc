import TRADE_CODE from './tradecode.js';

class Txn {

  constructor(tradecode, side, price, size) {
    this.txnId = -1;
    this.tradecode = tradecode;
    this.side = side;
    this.price = price;
    this.size = size;
  }

}

export default Txn;