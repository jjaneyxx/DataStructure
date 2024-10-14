class LinkedList {
  // 필드 선언
  length = 0;
  head = null; // 첫번째 노드를 가리키는 참조 (null)

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
      // 첫번째 노드를 만들어 추가할 때는 this.head 를 직접 갱신한다
      this.head = new Node(value);
    }
    this.length++; // 필수
    return this.length; // (선택)
  }

  search(index) {
    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current?.next;
      count++;
    }
    return current?.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
  }
  next = null;
}

const ll = new LinkedList();

ll.add(1); // 1
ll.add(2); // 2
ll.add(3); // 3
console.log(ll.length); // 3
console.log(ll.search(1)); // 1번 인덱스 -> 2
console.log(ll.search(4)); // 4번 인덱스 -> undefined
