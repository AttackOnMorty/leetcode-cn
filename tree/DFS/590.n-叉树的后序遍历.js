/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
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
 * @return {number[]}
 */

// O(n) / O(logn -> n)
function postorder(root) {
    const res = [];
    helper(root);
    return res;

    function helper(root) {
        if (root === null) return;
        for (const node of root.children) {
            helper(node);
        }
        res.push(root.val);
    }
}

// @lc code=end
