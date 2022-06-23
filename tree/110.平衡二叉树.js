/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
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
 * @return {boolean}
 */

function isBalanced(root) {
    let balanced = true;
    height(root);
    return balanced;

    function height(root) {
        if (root === null) return 0;
        const leftHeight = height(root.left);
        const rightHeight = height(root.right);

        if (Math.abs(leftHeight - rightHeight) > 1) {
            balanced = false;
        }

        return 1 + Math.max(leftHeight, rightHeight);
    }
}

// @lc code=end
