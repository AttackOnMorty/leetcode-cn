/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    // O(1) / O(n)
    push(val) {
        if (this.stack.length === 0) {
            this.stack.push(val);
            this.minStack.push(val);
        } else {
            const min = this.minStack[this.stack.length - 1];
            this.minStack.push(val < min ? val : min);
            this.stack.push(val);
        }
    }

    /**
     * @return {void}
     */
    // O(1) / O(n)
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    // O(1) / O(n)
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    // O(1) / O(n)
    getMin() {
        return this.minStack[this.stack.length - 1];
    }
}

/**
 will  and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
