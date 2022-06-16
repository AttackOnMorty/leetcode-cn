/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// O(n) / O(1)
function mergeTwoLists(list1, list2) {
    const dummyHead = new ListNode('dummy');
    let tail = dummyHead;
    let p1 = list1;
    let p2 = list2;

    while (p1 !== null && p2 !== null) {
        if (p1.val <= p2.val) {
            tail.next = p1;
            p1 = p1.next;
        } else {
            tail.next = p2;
            p2 = p2.next;
        }
        tail = tail.next;
    }

    tail.next = p1 !== null ? p1 : p2;

    return dummyHead.next;
}

// @lc code=end
