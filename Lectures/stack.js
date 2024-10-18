// LIFO
class Stack {
  arr = [];

  // O(1)
  push(value) {
    return this.arr.push(value);
  }

  // O(1)
  pop() {
    // 스택의 최상단 원소 = 배열의 마지막 인덱스 제거
    return this.arr.pop();
  }

  top() {
    // 스택의 최상단 원소를 배열의 마지막 인덱스를 사용해 반환, this.arr[length-1] 이랑 같음
    return this.arr.at(-1);
  }

  // length 를 getter 로 선언해 속성처럼 호출
  get length() {
    return this.arr.length;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(3);
stack.push(5);
stack.push(7);
// getter : 데이터를 조회해서 값을 반환하는 용도로 사용함
// getter 은 속성처럼 접근해야 하므로 괄호 없이 호출
console.log(stack.length);
stack.pop();
stack.pop();
console.log(stack.top());
