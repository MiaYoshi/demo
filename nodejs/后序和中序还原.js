function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const postOrder = [3, 6, 5, 11, 15, 10]
const inOrder = [3, 5, 6, 10, 11, 15]

const buildTree = (inorder, postorder) => {
  if (inorder.length == 0) return null
  const len = postorder.length
  const root = new TreeNode(postorder[len - 1])
  const mid = inorder.indexOf(postorder[len - 1])
  root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid))
  root.right = buildTree(inorder.slice(mid + 1), postorder.slice(mid, -1))
  return root
}
// var buildTree = function (inorder, postorder) {
//   if (!postorder) return null

//   const map = new Map()
//   inorder.forEach((val, index) => map.set(val, index))
//   let index = inorder.length - 1

//   function build(left, right) {
//     if (left > right) return null

//     const rootVal = postorder[index--]
//     const root = new TreeNode(rootVal)

//     const mid = map.get(rootVal)

//     root.right = build(mid + 1, right)
//     root.left = build(left, mid - 1)

//     return root
//   }

//   return build(0, inorder.length - 1)
// }
console.log(JSON.stringify(buildTree(inOrder, postOrder)))
