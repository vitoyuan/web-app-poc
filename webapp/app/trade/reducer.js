import Immutable from 'immutable';
import _ from 'lodash';
import {
  CREATE_TXN,
  READ_TXNS
} from './actionType.js';

export default function todoApp(state = Immutable.Map({
  txns: Immutable.Map({})
}), action) {
  switch (action.type) {
    case READ_TXNS:
      let txns = action.payload.txns.map(t => Immutable.Map(t));
      txns = Immutable.Map(_.keyBy(txns, t => t.get('txnId').toString()));
      return state
        .set('txns', txns);
    case CREATE_TXN:
      return state;
    default:
      return state;
  }
}