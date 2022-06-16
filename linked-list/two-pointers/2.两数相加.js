/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// O(n) / O(1)
function addTwoNumbers(l1, l2) {
    const dummyHead = new ListNode('dummy');
    let tail = dummyHead;
    let p1 = l1;
    let p2 = l2;
    let carry = 0;

    while (p1 !== null || p2 !== null) {
        let sum = 0;

        if (p1 !== null) {
            sum += p1.val;
            p1 = p1.next;
        }

        if (p2 !== null) {
            sum += p2.val;
            p2 = p2.next;
        }

        sum += carry;

        tail.next = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);

        tail = tail.next;
    }

    if (carry !== 0) {
        tail.next = new ListNode(carry);
    }

    return dummyHead.next;
}

// @lc code=end
