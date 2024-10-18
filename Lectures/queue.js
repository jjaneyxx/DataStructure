// LIFO
class Queue {
  arr = [];

  // 삽입
  enqueue(value) {
    return this.arr.push(value);
  }
  // 큐의 첫번째 원소 제거 (배열의 첫번째 인덱스)
  dequeue() {
    return this.arr.shift();
  }
  // 큐의 첫번째 원소를 반환
  peek() {
    return this.arr.at(0);
  }
  // 길이를 반환
  get length() {
    return this.arr.length;
  }
}
const queue = new Queue();
