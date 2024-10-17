class Node {
  constructor(value) {
    this.value = value;
    this.prev = null; // 이전 노드를 가리키는 포인터
    this.next = null; // 다음 노드를 가리키는 포인터
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null; // 1번째 노드
    this.tail = null; // 마지막 노드
    this.length = 0; // 노드의 개수
  }

  // 리스트 끝에 노드를 추가, O(1)
  add(value) {
    const node = new Node(value);

    if (this.tail) {
      // 비어있지 않음
      this.tail.next = node;
      node.prev = this.tail; // 새 노드의 prev를 기존 tail과 연결
      this.tail = node;
    } else {
      // 예외 : 연결리스트가 비어있음
      this.head = node;
      this.tail = node;
    }
    this.length++;
  }

  // 주어진 인덱스의 값을 찾음, O(n)
  get(index) {
    // 예외 : 인덱스가 0보다 작거나 연결리스트 길이를 초과함
    if (index < 0 || index >= this.length) return undefined;
    let current;
    let count;
    if (index < this.length / 2) {
      // index 가 중간보다 작음, 앞쪽부터 탐색
      current = this.head;
      count = 0;
      while (count < index) {
        current = current.next; // current 이동
        count++; // count 증가
      }
    } else {
      // index 가 중간보다 큼, 뒤쪽부터 탐색
      current = this.tail;
      count = this.length - 1;
      while (count > index) {
        current = current.prev; // current 이동
        count--;
      }
    }
    return current ? current.value : undefined;
  }

  // 첫번째 노드를 제거, O(1)
  removeFirst() {
    if (!this.head) return undefined; // 예외 : 연결리스트가 비어있음
    const removedValue = this.head.value; // 첫번째 노드 데이터
    this.head = this.head.next; // head 를 두 번째 노드로 이동
    this.head ? (this.head.prev = null) : (this.tail = null); // head가 존재하면 head의 prev를 null. 예외: head가 null이면 tail도 null.
    this.length--;
    return removedValue;
  }

  // 주어진 인덱스의 노드를 삭제, O(n)
  remove(index) {
    if (index < 0 || index >= this.length) return undefined; // 예외 : 인덱스가 0보다 작거나 연결리스트 길이를 초과함
    if (index === 0) return this.removeFirst(); // 첫번째 노드 삭제

    let current;
    let count;

    if (index < this.length / 2) {
      // 앞에서부터 탐색
      current = this.head;
      count = 0;
      while (count < index) {
        current = current.next;
        count++;
      }
    } else {
      // 뒤에서부터 탐색
      current = this.tail;
      count = this.length - 1;
      while (count > index) {
        current = current.prev;
        count--;
      }
    }
    current.prev.next = current.next; // 삭제하는 핵심 부분
    // 삭제한 노드 이후에 노드가 있으면 그 노드와 삭제 노드 이전을 연결. 예외 : 없는 경우 tail을 current.prev 로 조정
    current.next ? (current.next.prev = current.prev) : (this.tail = current.prev);
    this.length--;
    return current.value;
  }

  // 리스트의 모든 값을 출력, O(n)
  print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next; // current 이동
    }
    console.log(result.join("<->"));
  }
}

const ll = new DoublyLinkedList();

/*
ll.add(2);
ll.add(4);
ll.add(6);
ll.removeFirst();
ll.add(8);
console.log(ll.get(1));
ll.remove(2);
ll.print();
*/
