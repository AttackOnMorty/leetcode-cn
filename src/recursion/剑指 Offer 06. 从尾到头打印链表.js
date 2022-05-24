/*
剑指 Offer 06. 从尾到头打印链表

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。 

示例 1：
输入：head = [1,3,2]
输出：[2,3,1]
 
限制：
0 <= 链表长度 <= 10000

链接：https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

// O(n) / O(n)
function reversePrint(head) {
    const result = [];
    helper(head, result);
    return result;
}

function helper(head, result) {
    if (head === null) return;
    helper(head.next, result);
    result.push(head.val);
}
