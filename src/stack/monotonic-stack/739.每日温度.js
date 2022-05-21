/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// O(n) / O(n)
function dailyTemperatures(temperatures) {
    const n = temperatures.length;
    const stack = [];
    const result = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        while (
            stack.length !== 0 &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            const index = stack.pop();
            result[index] = i - index;
        }

        stack.push(i);
    }

    return result;
}

// @lc code=end
