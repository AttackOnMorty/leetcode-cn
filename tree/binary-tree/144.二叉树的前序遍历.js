/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */

// O(n) / O(logn -> n)
function preorderTraversal(root) {
    const res = [];
    preorder(root);
    return res;

    function preorder(root) {
        if (root === null) return;
        res.push(root.val);
        preorder(root.left);
        preorder(root.right);
    }
}

// @lc code=end
