// LIFO
class Stack {
  arr = [];

  // 삽입, O(1)
  push(value) {
    return this.arr.push(value);
  }

  // 스택의 최상단 원소 (배열의 마지막 인덱스) 제거, O(1)
  pop() {
    return this.arr.pop();
  }

  // 스택의 최상단 원소를 배열의 마지막 인덱스를 사용해 반환, O(1)
  top() {
    return this.arr.at(-1);
  }

  // length 를 getter 로 선언해 속성처럼 호출, O(1)
  get length() {
    return this.arr.length;
  }
}

const stack = new Stack();
