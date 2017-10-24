import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import _ from 'lodash';

import {
  Txn
} from './feature/trade';

const server = express();
var txnId = 1;
var txns = [];
txns.push(new Txn('BTC_JPY', 'BUY', 600000, 1));
txns[0].txnId = txnId;
txnId++;

server.use(bodyParser.json());
server.use(express.static('./webapp'));

server.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: './webapp/view'
  });
});

server.get('/txns', function(req, res) {
  res.json({
    "txns": txns
  });
});

server.get('/txns/:txnId', function(req, res) {
  let txnId = req.params.txnId;
  let txn = _.find(txns, t => t.txnId == txnId);
  res.json(txn);
});

server.post('/txns', function(req, res) {
  let body = req.body;
  let txn = new Txn(body.tradeCode, body.side, body.price, body.size);
  txns.push(txn);
  txn.txnId = txnId;
  txnId++;
  res.json({
    result: 'txn ' + txn.txnId + ' executed successfully'
  });
});

server.listen(3000, function() {
  console.log('Server Launched. Port: 3000')
});