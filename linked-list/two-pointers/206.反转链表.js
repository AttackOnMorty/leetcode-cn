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

// O(n) / O(1)
function reverseList(head) {
    let newHead = null;
    let p = head;

    while (p !== null) {
        const next = p.next;
        p.next = newHead;
        newHead = p;
        p = next;
    }

    return newHead;
}

// O(n) / O(n)
function reverseList(head) {
    if (head === null || head.next === null) {
        return head;
    }

    const newHead = reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
}

// @lc code=end
