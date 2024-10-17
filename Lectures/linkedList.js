class Node {
  constructor(value) {
    this.value = value;
  }
  next = null;
}

class LinkedList {
  length = 0;
  head = null; // 첫번째 노드를 가리키는 참조 (null)

  // 노드 추가
  add(value) {
    let current = this.head;
    // if : 연결리스트가 비어있지 않음 (head 가 존재)
    // else : 연결리스트가 비어있음 (head 가 null)
    if (current) {
      while (current.next) {
        current = current.next; // this.head.next 가 null (없을 때까지) this.head 값을 계속 갱신
      }
      // while 문이 끝나면 이제 마지막 노드입니다
      // current.next 가 없는 상황이므로, 새로운 노드를 만들어 연결
      current.next = new Node(value);
    } else {
      // 예외상황`
      // 첫번째 노드를 만들어 추가할 때는 this.head 를 직접 갱신한다
      this.head = new Node(value);
    }
    this.length++; // 필수
    return this.length; // (선택)
  }

  // 특정 인덱스 값 반환
  search(index) {
    return this.#search(index)[1]?.value; // current 반환
  }

  // 인덱스를 기반으로 노드 탐색 (private)
  #search(index) {
    let prev; // remove() 때문에 추가
    let current = this.head;
    let count = 0;
    while (count < index) {
      prev = current; // prev 는 current 로 갱신
      current = current?.next; // current 가 null 이면 undefined 반환
      count++;
    }
    return [prev, current];
  }

  // 특정 인덱스의 노드 삭제
  remove(index) {
    const [prev, current] = this.#search(index);

    // 삭제할 노드가 없는 경우
    if (!current) return undefined;

    if (prev) {
      prev.next = current.next;
    } else {
      this.head = current.next; // 첫번째 노드를 삭제
    }

    this.length--;
    return this.length; // 삭제 후 리스트 길이 반환
  }
}

const ll = new LinkedList();

ll.add(1); // 1
ll.add(2); // 2
ll.add(3); // 3
console.log(ll.search(1)); // 2
console.log(ll.search(10)); // undefined
console.log(ll.remove(0)); // 2
console.log(ll);
