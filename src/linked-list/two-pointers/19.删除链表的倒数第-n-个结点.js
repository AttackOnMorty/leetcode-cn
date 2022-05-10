/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */

// O(n) / O(1)
function removeNthFromEnd(head, n) {
    const dummyHead = new ListNode('dummy', head);
    let slow = dummyHead;
    let fast = dummyHead;

    while (n !== 0) {
        fast = fast.next;
        n--;
    }

    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return dummyHead.next;
}

// @lc code=end
