/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
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
 * @return {number}
 */

function maxDepth(root) {
    if (root === null) return 0;
    if (root.children.length === 0) return 1;
    return 1 + Math.max(...root.children.map(maxDepth));
}

// @lc code=end
