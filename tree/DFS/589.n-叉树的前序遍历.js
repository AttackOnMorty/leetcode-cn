/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

// O(n) / O(logn -> n)
function preorder(root) {
    const res = [];
    helper(root);
    return res;

    function helper(root) {
        if (root === null) return;
        res.push(root.val);
        for (const node of root.children) {
            helper(node);
        }
    }
}

// @lc code=end
