import * as t from './types';

export default (state, action) => {
  const { type, error, newNodeVal, updateNodeKey, updateNodeVal } = action;
  switch(type) {
    case t.SET_ERROR:
      return Object.assign({}, state, { error });
    case t.SET_NEW_NODE_VAL:
      return Object.assign({}, state, { newNodeVal });
    case t.SET_UPDATE_NODE_KEY:
      return Object.assign({}, state, { updateNodeKey })
    case t.SET_UPDATE_NODE_VAL:
      return Object.assign({}, state, { updateNodeVal });
    default:
      return state;
  }
}