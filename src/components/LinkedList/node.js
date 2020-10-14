class LinkedListNode {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  };

  getValue = () => this.value;

  setValue = (newValue) => { this.value = newValue };

  getNext = () => this.next;

  setNext = (newNext) => { this.next = newNext };
}

export default LinkedListNode;