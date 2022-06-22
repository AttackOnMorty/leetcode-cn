/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */

// O(n) / O(n)
function levelOrder(root) {
    if (root === null) return [];

    const res = [];
    const queue = [];

    queue.push(root);

    while (queue.length !== 0) {
        const children = [];
        const n = queue.length;
        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            children.push(node.val);
            for (const childNode of node.children) {
                queue.push(childNode);
            }
        }
        res.push(children);
    }

    return res;
}

// @lc code=end
