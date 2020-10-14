import * as t from './types';

export const setError = (error) => ({ 
  type: t.SET_ERROR,
  error
});

export const setNewNodeValue = (val) => ({
  type: t.SET_NEW_NODE_VAL,
  newNodeVal: val
});

export const setUpdateNodeKey = (key) => ({
  type: t.SET_UPDATE_NODE_KEY,
  updateNodeKey: key
})

export const setUpdateNodeValue = (val) => ({
  type: t.SET_UPDATE_NODE_VAL,
  updateNodeVal: val
});

export const setDeleteNodeKey = (key) => ({
  type: t.SET_DELETE_NODE_KEY,
  deleteNodeKey: key
});

export const updateNodeArray = (nodeArray) => ({
  type: t.UPDATE_NODE_ARRAY,
  nodeArray
});