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

  let queue = [root];

  let depth = 0;

  // BFS loop (explores the graph level by level)
  while(queue[0]) {

      let queueLength = queue.length;

      for (let i = 0; i < queueLength; i++) {
          let node = queue.shift()

          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }

      depth++;
  }

  return depth;
};