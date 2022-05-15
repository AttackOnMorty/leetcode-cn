/*
面试题 03.05. 栈排序

栈排序。 编写程序，对栈进行排序使最小元素位于栈顶。最多只能使用一个其他的临时栈存放数据，但不得将元素复制到别的数据结构（如数组）中。该栈支持如下操作：push、pop、peek 和 isEmpty。当栈为空时，peek 返回 -1。

示例1:
 输入：
["SortedStack", "push", "push", "peek", "pop", "peek"]
[[], [1], [2], [], [], []]
 输出：
[null,null,null,1,null,2]

示例2:
 输入： 
["SortedStack", "pop", "pop", "push", "pop", "isEmpty"]
[[], [], [], [1], [], []]
 输出：
[null,null,null,null,null,true]

说明:
栈中的元素数目在[0, 5000]范围内。

链接：https://leetcode.cn/problems/sort-of-stacks-lcci
*/

class SortedStack {
    constructor() {
        this.stack = [];
        this._stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    // O(n) / O(n)
    push(val) {
        while (
            this.stack.length !== 0 &&
            this.stack[this.stack.length - 1] < val
        ) {
            this._stack.push(this.stack.pop());
        }

        this.stack.push(val);

        while (this._stack.length !== 0) {
            this.stack.push(this._stack.pop());
        }
    }

    /**
     * @return {void}
     */
    // O(1) / O(n)
    pop() {
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    // O(1) / O(n)
    peek() {
        return this.stack.length === 0 ? -1 : this.stack[this.stack.length - 1];
    }

    /**
     * @return {boolean}
     */
    // O(1) / O(n)
    isEmpty() {
        return this.stack.length === 0;
    }
}

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */
