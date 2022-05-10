/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
function oddEvenList(head) {
    if (head === null || head.next === null || head.next.next === null) {
        return head;
    }

    const evenHead = head.next;
    let p1 = head;
    let p2 = evenHead;

    while (p2 !== null && p2.next !== null) {
        p1.next = p1.next.next;
        p2.next = p2.next.next;
        p1 = p1.next;
        p2 = p2.next;
    }

    p1.next = evenHead;

    return head;
}

// @lc code=end
