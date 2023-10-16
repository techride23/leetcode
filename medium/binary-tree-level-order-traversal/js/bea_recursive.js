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
 * @return {number[][]}
 */
var levelOrder = function(root) {

  if (!root) return [];

  let res = [[]];

  traverseLevels(root, res, 0);

  return res;
};

var traverseLevels = function(node, res, level) 
{
  if (!node) return;

  // res level doesn't exist? create it
  if (!res[level])
  { 
      res[level] = [];
  }

  // add val to current level
  res[level].push(node.val);

  traverseLevels(node.left, res, level + 1);
  traverseLevels(node.right, res, level + 1);
}