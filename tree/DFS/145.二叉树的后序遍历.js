/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
function postorderTraversal(root) {
    const res = [];
    postorder(root);
    return res;

    function postorder(root) {
        if (root === null) return;
        postorder(root.left);
        postorder(root.right);
        res.push(root.val);
    }
}

// @lc code=end
