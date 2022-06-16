/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */

// O(n) / O(n)
function reverseKGroup(head, k) {
    if (head === null) {
        return null;
    }
    let p = head;
    for (let i = 0; i < k; i++) {
        if (p === null) {
            return head;
        }
        p = p.next;
    }

    const newHead = reverse(head, p);
    head.next = reverseKGroup(p, k);

    return newHead;
}

// O(k) / O(1)
function reverse(node1, node2) {
    let newHead = null;
    let p = node1;

    while (p !== node2) {
        const next = p.next;
        p.next = newHead;
        newHead = p;
        p = next;
    }

    return newHead;
}

// TODO: O(n) / O(1)
function reverseKGroup(head, k) {}

// @lc code=end
