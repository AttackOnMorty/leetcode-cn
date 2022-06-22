/*
剑指 Offer 32 - III. 从上到下打印二叉树 III

请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

例如:
给定二叉树: [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：
[
  [3],
  [20,9],
  [15,7]
]
 

提示：
节点总数 <= 1000

链接：https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/
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
 * @return {number[][]}
 */

// O(n) / O(n)
function levelOrder(root) {
    if (root === null) return [];

    const res = [];
    const queue = [];
    let isOrderRight = true;

    queue.push(root);

    while (queue.length !== 0) {
        const children = [];
        const n = queue.length;
        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            if (isOrderRight) {
                children.push(node.val);
            } else {
                children.unshift(node.val);
            }
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
        res.push(children);
        isOrderRight = !isOrderRight;
    }

    return res;
}
