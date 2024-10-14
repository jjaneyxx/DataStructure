class Node {
  constructor(value) {
    this.value = value;
  }
  next = null;
}

class LinkedList {
  // 필드 선언
  length = 0;
  head = null; // 첫번째 노드를 가리키는 참조 (null)

  // private method : 인덱스를 기반으로 노드를 탐색
  // prev, current 두 개를 반환함

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
      // 예외상황
      // 첫번째 노드를 만들어 추가할 때는 this.head 를 직접 갱신한다
      this.head = new Node(value);
    }
    this.length++; // 필수
    return this.length; // (선택)
  }

  search(index) {
    return this.#search(index)[1]?.value; // current 반환
  }

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

  // 노드가 삭제된 후 길이를 반환
  remove(index) {
    const [prev, current] = this.#search(index);
    if (prev && current) {
      prev.next = current.next;
      this.length--;
      return this.length;
    } else if (current) {
      // prev 는 없고 current 만 있음 = 제거하는 index가 0인 경우
      this.head = current.next; // curent.next 로 첫번째 노드를 갱신
      this.length--;
      return this.length;
    } else {
      // current 와 prev 둘다 없는 경우
      // 찾고자 하는 대상이 없는 경우
    }
  }
}

const ll = new LinkedList();

ll.add(1); // 1
ll.add(2); // 2
ll.add(3); // 3
console.log(ll.search(1)); // 2
console.log(ll.search(10)); // undefined
console.log(ll.remove(0)); // 2
