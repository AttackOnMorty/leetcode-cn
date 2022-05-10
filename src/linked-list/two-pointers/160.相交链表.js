/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// O(m + n) / O(1)
function getIntersectionNode(headA, headB) {
    let p1 = headA;
    let p2 = headB;

    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;

        if (p1 === null && p2 === null) {
            return null;
        }

        if (p1 === null) {
            p1 = headB;
        }

        if (p2 === null) {
            p2 = headA;
        }
    }

    return p1;
}

// @lc code=end
