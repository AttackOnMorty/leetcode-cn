/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */

// O(n) / O(n)
function levelOrder(root) {
    if (root === null) return [];

    const res = [];
    const queue = [];

    queue.push(root);

    while (queue.length !== 0) {
        let children = [];
        const n = queue.length;
        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            children.push(node.val);
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
        res.push(children);
    }

    return res;
}

// @lc code=end
