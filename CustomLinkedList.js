class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // 다음 노드
  }
}

class LinkedList {
  constructor() {
    this.head = null; // 1번째 노드
    this.tail = null; // 마지막 노드
    this.length = 0; // 노드의 개수
  }

  // 리스트 끝에 노드를 추가, O(1)
  add(value) {
    const node = new Node(value);
    // 예외 : 연결리스트가 비어있음
    if (this.tail) {
      // 비어있지 않음
      this.tail.next = node;
      this.tail = node;
    } else {
      // 비어있음
      this.head = node;
      this.tail = node;
    }
    this.length++;
  }

  // 주어진 인덱스의 값을 찾음, O(n)
  get(index) {
    // 예외 : 인덱스가 0보다 작거나 연결리스트 길이를 초과함
    if (index < 0 || index >= this.length) return undefined;
    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++; // count 올리기
    }

    return current ? current.value : undefined;
  }

  // 첫번째 노드를 제거, O(1)
  removeFirst() {
    if (!this.head) return undefined; // 예외 : 연결리스트가 비어있음
    const removedValue = this.head.value; // 첫번째 노드 데이터
    this.head = this.head.next; // head 를 두 번째 노드로 이동
    if (!this.head) this.tail = null; // 예외 : 첫 번째 노드 제거 후 연결리스트가 비어있음 -> tail도 null, 빈 리스트 상태 표현하기
    this.length--;
    return removedValue;
  }

  // 주어진 인덱스의 노드를 삭제, O(n)
  remove(index) {
    if (index < 0 || index >= this.length) return undefined; // 예외 : 인덱스가 0보다 작거나 연결리스트 길이를 초과함
    if (index === 0) return this.removeFirst(); // 첫번째 노드 삭제
    let current = this.head; // 현재 탐색 중인 노드. 처음에는 head 를 가리키게 함. 삭제할 노드를 찾기 위해 current 가 리스트를 순차적으로 탐색함
    let previous; // 노드를 삭제하면, 이전 노드와 다음 노드를 연결해주어야 함. 이 때 필요한 변수
    let count = 0; // 삭제하려는 노드 위치를 카운트 하는 변수. current 와 previous 가 몇 번째 노드를 가리키는지 추적할 때 사용함
    // current가 삭제할 노드에 도달할 때까지 리스트를 탐색
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    // current 는 삭제할 노드에 도달한 상태
    previous.next = current.next; // 삭제하는 핵심 부분
    // 예외 : 삭제된 노드가 마지막 노드였을 경우, this.tail 을 previous 로 갱신함
    // 이렇게 하지 않으면 this.tail 은 계속 삭제된 노드를 가리키므로 이후 오류가 발생할 수도 있음
    if (!previous.next) this.tail = previous;
    this.length--;
    return current.value; // 삭제한 값을 반환
  }

  // 리스트의 모든 값을 출력, O(n)
  print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next; // current 이동
    }
    console.log(result.join("->"));
  }
}

const ll = new LinkedList();

/*
ll.add(2);
ll.add(4);
ll.add(6);
ll.remove(1);
console.log(ll.get(1));
ll.removeFirst();
ll.print();
*/
