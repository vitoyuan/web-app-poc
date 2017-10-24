class Txn {

  constructor(tradeCode, side, price, size) {
    this.txnId = -1;
    this.tradeCode = tradeCode;
    this.side = side;
    this.price = price;
    this.size = size;
  }

}

export default Txn;