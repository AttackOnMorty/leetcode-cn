/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

class MyStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    // O(n) / O(n)
    push(x) {
        this.queue2.push(x);

        while (this.queue1.length !== 0) {
            this.queue2.push(this.queue1.shift());
        }

        const temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
    }

    /**
     * @return {number}
     */
    // O(1) / O(n)
    pop() {
        return this.queue1.shift();
    }

    /**
     * @return {number}
     */
    // O(1) / O(n)
    top() {
        return this.queue1.length === 0 ? -1 : this.queue1[0];
    }

    /**
     * @return {boolean}
     */
    // O(1) / O(n)
    empty() {
        return this.queue1.length === 0;
    }
}

class MyStack {
    constructor() {
        this.queue = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    // O(n) / O(n)
    push(x) {
        const n = this.queue.length;
        this.queue.push(x);
        for (let i = 0; i < n; i++) {
            this.queue.push(this.queue.shift());
        }
    }

    /**
     * @return {number}
     */
    // O(1) / O(n)
    pop() {
        return this.queue.shift();
    }

    /**
     * @return {number}
     */
    // O(1) / O(n)
    top() {
        return this.queue1.length === 0 ? -1 : this.queue[0];
    }

    /**
     * @return {boolean}
     */
    // O(1) / O(n )
    empty() {
        return this.queue.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
