/*
面试题 03.01. 三合一

三合一。描述如何只用一个数组来实现三个栈。
你应该实现push(stackNum, value)、pop(stackNum)、isEmpty(stackNum)、peek(stackNum)方法。stackNum表示栈下标，value表示压入的值。
构造函数会传入一个stackSize参数，代表每个栈的大小。

示例1:
 输入：
["TripleInOne", "push", "push", "pop", "pop", "pop", "isEmpty"]
[[1], [0, 1], [0, 2], [0], [0], [0], [0]]
 输出：
[null, null, null, 1, -1, -1, true]
说明：当栈为空时`pop, peek`返回-1，当栈满时`push`不压入元素。

示例2:
 输入：
["TripleInOne", "push", "push", "push", "pop", "pop", "pop", "peek"]
[[2], [0, 1], [0, 2], [0, 3], [0], [0], [0], [0]]
 输出：
[null, null, null, null, 2, 1, -1, -1]
 
提示：
0 <= stackNum <= 2

链接：https://leetcode.cn/problems/three-in-one-lcci
*/

class TripleInOne {
    /**
     * @param {number} stackSize
     */
    constructor(stackSize) {
        this.stackSize = stackSize;
        this.n = this.stackSize * 3;
        this.array = new Array(this.n);
        this.top = [-3, -2, -1];
    }

    /**
     * @param {number} stackNum
     * @param {number} value
     * @return {void}
     */
    // O(1) / O(n)
    push(stackNum, value) {
        if (this.top[stackNum] + 3 >= this.n) {
            return;
        }

        this.top[stackNum] += 3;
        this.array[this.top[stackNum]] = value;
    }

    /**
     * @param {number} stackNum
     * @return {number}
     */
    // O(1) / O(n)
    pop(stackNum) {
        if (this.top[stackNum] < 0) {
            return -1;
        }

        const result = this.array[this.top[stackNum]];
        this.top[stackNum] -= 3;

        return result;
    }

    /**
     * @param {number} stackNum
     * @return {number}
     */
    // O(1) / O(n)
    peek(stackNum) {
        return this.top[stackNum] < 0 ? -1 : this.array[this.top[stackNum]];
    }

    /**
     * @param {number} stackNum
     * @return {boolean}
     */
    // O(1) / O(1)
    isEmpty(stackNum) {
        return this.top[stackNum] < 0;
    }
}

/**
 * Your TripleInOne object will be instantiated and called as such:
 * var obj = new TripleInOne(stackSize)
 * obj.push(stackNum,value)
 * var param_2 = obj.pop(stackNum)
 * var param_3 = obj.peek(stackNum)
 * var param_4 = obj.isEmpty(stackNum)
 */
