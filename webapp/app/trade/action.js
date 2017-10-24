import {
  ajax
} from '../util';
import {
  CREATE_TXN,
  READ_TXNS
} from './actionType.js';

export function createTxn(txn) {
  return (dispatch) => {
    return ajax.postJSON('txns', txn)
      .then(response => {
        return dispatch({
          type: CREATE_TXN,
          payload: response
        });
      });
  }
}

export function readTxns() {
  return (dispatch) => {
    return ajax.getJSON('txns')
      .then(response => {
        return dispatch({
          type: READ_TXNS,
          payload: response
        });
      });
  }
}