class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 리스트 끝에 노드를 추가
  add(value) {
    const node = new Node(value);
    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
  }

  // 주어진 인덱스의 값을 찾음
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current ? current.value : undefined;
  }

  // 첫번째 노드를 제거
  removeFirst() {
    if (!this.head) return undefined;
    const removedValue = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.length--;
    return removedValue;
  }

  // 주어진 인덱스의 노드를 삭제
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.removeFirst();
    let current = this.head;
    let previous;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = current.next;
    if (!previous.next) this.tail = previous;
    this.length--;
    return current.value;
  }

  // 리스트의 모든 값을 출력
  print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join("->"));
  }
}

const ll = new LinkedList();
