/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// O(n) / O(n)
function reverseList(head) {
    if (head === null) return null;
    if (head.next === null) return head;

    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return newHead;
}

// @lc code=end
