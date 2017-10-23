import TRADE_CODE from './tradecode.js';

class Txn {

  constructor(txnId, tradecode, side, price, size) {
    this.txnId = txnId;
    this.tradecode = tradecode;
    this.side = side;
    this.price = price;
    this.size = size;
  }

}

export default Txn;