/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */

function isPalindrome(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    const rightHalfHead = fast === null ? slow : slow.next;
    let p1 = reverseList(rightHalfHead);
    let p2 = head;

    while (p1 !== null) {
        if (p1.val !== p2.val) {
            return false;
        } else {
            p1 = p1.next;
            p2 = p2.next;
        }
    }

    return true;
}

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

// @lc code=end
