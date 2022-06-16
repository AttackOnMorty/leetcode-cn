/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

// O(n) / O(n)
function trap(height) {
    const n = height.length;
    const stack = [];
    let result = 0;

    for (let i = 0; i < n; ++i) {
        while (
            stack.length !== 0 &&
            height[i] > height[stack[stack.length - 1]]
        ) {
            const low = stack.pop();
            if (!stack.length) {
                break;
            }
            const left = stack[stack.length - 1];
            const currWidth = i - left - 1;
            const currHeight = Math.min(height[left], height[i]) - height[low];
            result += currWidth * currHeight;
        }

        stack.push(i);
    }

    return result;
}

// @lc code=end
