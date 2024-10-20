// 큐 : FIFO, 첫번째로 들어온 원소를 제거하고 반환한다.
class Node {
  constructor(value) {
    this.value = value;
  }
  prev = null;
  next = null;
}

class QueueByLinkedList {
  length = 0;
  head = null;
  tail = null;

  // 삽입 : 비어있는 큐 or 비어있지 않으면 노드를 뒤와 연결
  enqueue(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // 비어있지 않음
      this.tail.next = node; // 기존 tail 의 next 를 새 노드와 연결
      node.prev = this.tail; // 새 노드의 prev 를 기존 tail 로 연결
      this.tail = node;
    }
    this.length++;
  }
  // 삭제 : 비어있는 큐 or 비어있지 않을 때 노드가 하나 / 여러 개
  dequeue() {
    if (!this.head) return undefined;
    const dequeuedValue = this.head.value;
    if (this.head === this.tail) {
      // 노드가 하나
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return dequeuedValue;
  }
  // 큐의 가장 맨 앞 원소 반환
  peek() {
    if (!this.head) return undefined;
    else {
      return this.head.value;
    }
  }
  getLength() {
    return this.length;
  }
}
/*
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue(); // 10 아웃
console.log(queue.peek()); // 20
console.log(queue.getLength()); // 2
*/
