class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
  print() {
    const stack = [this];
    const output = []
    while(stack.length) {
      const current = stack.pop();
      if(current.right) stack.push(current.right);
      if(current.left) stack.push(current.left);
      output.push(current.val);
    }
    console.log(output);
  }
}

const testTree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));
const testTree2 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));

var recursiveInvertTree = function(root) {
  if (root !== null) {
      const temp = root.left;
      root.left = recursiveInvertTree(root.right);
      root.right = recursiveInvertTree(temp);
  }

  return root;
};

var iterativeInvertTree = function(root) {
  const stack = [root];

  while(stack.length) {
      const node = stack.pop()
      if(node !== null) {
          stack.push(node.right);  
          stack.push(node.left);
          const temp = node.left;
          node.left = node.right;
          node.right = temp;
      }
  }

  return root;
};

testTree.print()
recursiveInvertTree(testTree).print()
iterativeInvertTree(testTree2).print()