/*
剑指 Offer 09. 用两个栈实现队列

用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

示例 1：
输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]

示例 2：
输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]

提示：
1 <= values <= 10000
最多会对 appendTail、deleteHead 进行 10000 次调用

链接：https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof
*/

class CQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    /**
     * @param {number} value
     * @return {void}
     */
    // O(1) / O(n)
    appendTail(value) {
        this.stack1.push(value);
    }

    /**
     * @return {number}
     */
    // O(1) / O(n)
    deleteHead() {
        if (this.stack2.length !== 0) {
            return this.stack2.pop();
        }

        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop());
        }

        return this.stack2.length === 0 ? -1 : this.stack2.pop();
    }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
