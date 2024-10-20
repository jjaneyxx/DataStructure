class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class StackByLinkedList {
  head = null;
  tail = null;
  length = 0;

  // 삽입: 비어있으면 새 노드를 바로 만들고, 이미 있으면 노드와 노드끼리 연결
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // 새 노드의 prev 와 next 를 연결
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  // 삭제: 비어있으면 undefined 리턴, 비어있지 않으면 가장 최상단 노드를 삭제 후 반환
  pop() {
    if (!this.head) return undefined;
    const poppedValue = this.tail.value;
    if (this.head === this.tail) {
      // 노드가 하나일 때
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return poppedValue;
  }

  // 맨 위 원소 조회: 비어있으면 undefined, 비어있지 않으면 맨 위 원소를 반환
  top() {
    if (!this.head) return undefined;
    else {
      return this.tail;
    }
  }

  // 스택 길이
  getLength() {
    return this.length;
  }
}

const sl = new StackByLinkedList();
sl.push(10);
sl.push(20);
sl.push(30);
sl.pop();
console.log(sl.top().value);
console.log(sl.getLength());
console.log(sl);
