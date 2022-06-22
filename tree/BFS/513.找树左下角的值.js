/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
 * @return {number}
 */

// O(n) / O(n)
function findBottomLeftValue(root) {
    let res;
    const queue = [];

    queue.push(root);

    while (queue.length !== 0) {
        const n = queue.length;
        for (let i = 0; i < n; i++) {
            const node = queue.shift();

            if (i === 0) {
                res = node.val;
            }

            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
    }

    return res;
}

// @lc code=end
