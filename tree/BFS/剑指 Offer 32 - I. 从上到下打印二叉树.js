/*
剑指 Offer 32 - I. 从上到下打印二叉树

从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回：
[3,9,20,15,7]
 
提示：
节点总数 <= 1000

链接：https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// O(n) / O(n): The space complexity is equal to the number of nodes in the last level, which is O(n/2)
function levelOrder(root) {
    if (root === null) return [];

    const res = [];
    const queue = [];

    queue.push(root);

    while (queue.length !== 0) {
        const n = queue.length;
        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            res.push(node.val);
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
    }

    return res;
}
