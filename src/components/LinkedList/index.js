import React, { useReducer, useEffect } from 'react';
import LinkedList from './list';
import LinkedListNode from './node';
import NodeDisplay from './node_display';
import reducer from './reducer';
import * as a from './actions';

const LinkedListPage = () => {
  const INITIAL_STATE = {
    LL: new LinkedList(),
    nodeArray: [],
    newNodeVal: '',
    updateNodeKey: '',
    updateNodeVal: '',
    deleteNodeKey: '',
    error: null
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const isEmpty = state.LL.head === null ? true : false;
  
  useEffect(() => {
    const nodeArray = state.LL.getAllNodes();
    dispatch(a.updateNodeArray(nodeArray));
  }, [state.LL]);

  const onAddNode = event => {
    event.preventDefault();
    state.LL.addNode(state.newNodeVal);
    dispatch(a.setNewNodeValue(''));
    dispatch(a.setError(null));
  }

  
  const onUpdateNode = event => {
    event.preventDefault();
    const update = state.LL.updateNode(state.updateNodeKey, state.updateNodeVal);
    if (update) {
      dispatch(a.setUpdateNodeKey(''));
      dispatch(a.setUpdateNodeValue(''));
      dispatch(a.setError(null));
    } else {
      dispatch(a.setError('The requested node was not found'));
    }
  }

  const onDeleteNode = event => {
    event.preventDefault();
    const deleted = state.LL.deleteNode(state.deleteNodeKey);
    if (deleted) {
      dispatch(a.setDeleteNodeKey(''));
      dispatch(a.setError(null));
    } else {
      dispatch(a.setError('The requested node was not found'));
    }
  }
  
  const onChangingNewNode = event => {
    dispatch(a.setNewNodeValue(event.target.value));
  }

  const onChangingUpdateKey = event => {
    dispatch(a.setUpdateNodeKey(event.target.value));
  }

  const onChangingUpdateVal = event => {
    dispatch(a.setUpdateNodeValue(event.target.value));
  }

  const onChangingDeleteKey = event => {
    dispatch(a.setDeleteNodeKey(event.target.value));
  }

  return (
    <div>
      <form onSubmit={onAddNode}>
        <label htmlFor='newNode'>Add a New Node: </label>
        <input type='text' placeholder='Node Value' name='newNode' id='newNode' value={state.newNodeVal} onChange={onChangingNewNode} />
        <button type='submit' className='submit-button'>Add New Node</button>
      </form>
      <form onSubmit={onUpdateNode}>
        <label htmlFor='updateKey'>Update This Key</label>
        <input type='number' placeholder='Node Key' name='updateKey' id='updateKey' value={state.updateNodeKey} onChange={onChangingUpdateKey} />
        <label htmlFor='updateVal'>With This Value</label>
        <input type='text' placeholder='New Value' name='updateVal' id='updateVal' value={state.updateNodeVal} onChange={onChangingUpdateVal} />
        <button type='submit' className='submit-button'>Update Node</button>
      </form>
      <form onSubmit={onDeleteNode}>
        <label htmlFor='deleteKey'>Delete This Key</label>
        <input type='number' placeholder='Node Key' name='deleteKey' id='deleteKey' value={state.deleteNodeKey} onChange={onChangingDeleteKey} />
        <button type='submit' className='submit-button'>Delete Node</button>
      </form>
      {isEmpty && <p>List Is Empty</p>}
      {state.error && <p>{state.error}</p>}
      {state.LL.getAllNodes().map(node => <NodeDisplay key={node.key} node={node} />)}
    </div>
  )
}

export default LinkedListPage;
export { LinkedList, LinkedListNode };