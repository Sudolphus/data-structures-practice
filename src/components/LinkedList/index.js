import React, { useReducer } from 'react';
import LinkedList from './list';
import LinkedListNode from './node';
import reducer from './reducer';
import * as a from './actions';

const LinkedListPage = () => {
  const INITIAL_STATE = {
    newNodeVal: '',
    updateNodeKey: '',
    updateNodeVal: '',
    deleteNodeKey: '',
    error: null
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const LL = new LinkedList();
  const isEmpty = LL.head === null ? true : false;

  const onAddNode = event => {
    event.preventDefault();
    LL.addNode(state.newNodeVal);
    dispatch(a.setNewNodeValue(''));
    dispatch(a.setError(null));
  }

  
  const onUpdateNode = event => {
    event.preventDefault();
    const update = LL.updateNode(state.updateNodeKey, state.updateNodeVal);
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
    const deleted = LL.deleteNode(state.deleteNodeKey);
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
        <label for='newNode'>Add a New Node: </label>
        <input type='text' placeholder='Node Value' name='newNode' id='newNode' value={state.newNodeVal} onChange={onChangingNewNode} />
        <button type='submit' className='submit-button'>Add New Node</button>
      </form>
      <form onSubmit={onUpdateNode}>
        <label for='updateKey'>Update This Key</label>
        <input type='number' placeholder='Node Key' name='updateKey' id='updateKey' value={state.updateNodeKey} onChange={onChangingUpdateKey} />
        <label for='updateVal'>With This Value</label>
        <input type='text' placeholder='New Value' name='updateVal' id='updateVal' value={state.updateNodeVal} onChange={onChangingUpdateVal} />
        <button type='submit' className='submit-button'>Update Node</button>
      </form>
      <form onSubmit={onDeleteNode}>
        <label for='deleteKey'>Delete This Key</label>
        <input type='number' placeholder='Node Key' name='deleteKey' id='deleteKey' value={state.deleteNodeKey} onChange={onChangingDeleteKey} />
        <button type='submit' className='submit-button'>Delete Node</button>
      </form>
      {isEmpty && <p>List Is Empty</p>}
      {state.error && <p>{state.error}</p>}
    </div>
  )
}

export default LinkedListPage;
export { LinkedList, LinkedListNode };