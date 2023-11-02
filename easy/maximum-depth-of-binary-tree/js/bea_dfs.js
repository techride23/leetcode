/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {

  if (!root) return 0;

  return findMax(root, 1);
};

var findMax = function(node, depth) {
  
  if (!node) return depth - 1;

  let left = findMax(node.left, depth + 1);
  let right = findMax(node.right, depth + 1);

  return Math.max(left, right);
}