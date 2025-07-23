function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/*
         10
      5      15
    3   6  11

*/
const tree = new TreeNode(10, new TreeNode(5, new TreeNode(3), new TreeNode(6)), new TreeNode(15, new TreeNode(11)))

/**
 *
 * @param {TreeNode} tree
 */
const func = (tree) => {
  const res = []
  if (!tree) return res
  res.push(...func(tree.left))
  res.push(tree.val)
  res.push(...func(tree.right))
  return res
}
console.log(JSON.stringify(func(tree)))
