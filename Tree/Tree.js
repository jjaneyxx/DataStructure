class Tree {
  constructor(value) {
    this.root = new Node(value);
  }
}

class Node {
  constructor(value) {
    this.children = [];
    this.value = value;
  }
  // 자식노드 푸쉬
  push(value) {
    this.children.push(new Node(value));
  }
}
const tree = new Tree(1); // 루트노드 1 생성

/*
tree.root.push(2); // 자식노드 2 추가
tree.root.push(3); // 자식 노드 3 추가
tree.root.children[0].push(4);
console.log(tree);
*/
