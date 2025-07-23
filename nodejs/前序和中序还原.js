function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const preOrder = [10, 5, 3, 6, 15, 11]
const inOrder = [3, 5, 6, 10, 11, 15]

const buildTree = (preorder, inorder) => {
  if (inorder.length == 0) return null
  const root = new TreeNode(preorder[0])
  const mid = inorder.indexOf(preorder[0])
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))
  return root
}
console.log(JSON.stringify(buildTree(preOrder, inOrder)))
