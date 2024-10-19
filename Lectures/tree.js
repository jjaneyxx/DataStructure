class Tree {
  constructor(value) {
    this.root = new Node(value);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.children = []; // 노드의 자식노드들
  }

  push(value) {
    // 새로운 노드를 만들어서 푸쉬 > 그렇게 해야 만든 새 노드도 자식들을 가질 수 있음
    this.children.push(new Node(value));
  }
}

const tree = new Tree(50);
tree.root.push(30);
tree.root.push(20);
tree.root.children[0].push(15);
tree.root.children[0].push(15);
tree.root.children[1].push(10);
tree.root.children[1].push(10);

/**
 * tree.root.children[0].value = 30;
 * tree.root.children[1].value = 20;
 */
