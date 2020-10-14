import LinkedListNode from './node';

class LinkedList {
  constructor() {
    this.head = null;
    this.nextKey = 0;
  }

  addNode = (val) => {
    const newNode = new LinkedListNode(++this.nextKey, val, this.head);
    this.head = newNode;
  }

  getNode = (key) => {
    let [currentNode, foundFlag] = [this.head, false];
    while (currentNode && !foundFlag) {
      // eslint-disable-next-line eqeqeq
      if (currentNode.key == key) {
        foundFlag = true;
      } else {
        currentNode = currentNode.getNext();
      }
    }
    return foundFlag ? currentNode : false;
  }

  getAllNodes = () => {
    let currentNode = this.head;
    const nodeArray = [];
    while (currentNode) {
      nodeArray.push(currentNode);
      currentNode = currentNode.getNext();
    }
    return nodeArray;
  }

  updateNode = (key, newValue) => {
    const nodeToUpdate = this.getNode(key);
    if (!nodeToUpdate) {
      return false;
    }
    nodeToUpdate.setValue(newValue);
    return true;
  }

  deleteNode = (key) => {
    let [currentNode, previousNode, foundFlag] = [this.head, null, false];
    if (currentNode === null) {
      return false;
    }
    while (currentNode && !foundFlag) {
      // eslint-disable-next-line eqeqeq
      if (currentNode.key == key) {
        foundFlag = true;
      } else {
        previousNode = currentNode;
        currentNode = currentNode.getNext();
      }
    }
    if (!foundFlag) {
      return false;
    } else if (previousNode === null) {
      this.head = currentNode.getNext();
    } else {
      previousNode.setNext(currentNode.getNext());
    }
    currentNode.setNext(null);
    return true;
  }
}

export default LinkedList;