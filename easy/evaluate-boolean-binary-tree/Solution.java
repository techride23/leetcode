/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean evaluateTree(TreeNode root) {
        var filhoEsquerdo = root.left;
        var filhoDireito = root.right;

        if (filhoEsquerdo == null && filhoDireito == null) {
            return (root.val > 0)? true : false;
        }

        var valorFilhoEsquerdo = evaluateTree(root.left);
        var valorFilhoDireito = evaluateTree(root.right);

        return (root.val == 3)? (valorFilhoEsquerdo && valorFilhoDireito) :
        (valorFilhoEsquerdo || valorFilhoDireito);

    }
}