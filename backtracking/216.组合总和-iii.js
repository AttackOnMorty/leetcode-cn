/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

function combinationSum3(k, n) {
    const nums = [...Array(9)].map((_, index) => index + 1);
    const res = [];
    let sum = 0;
    backtrack(nums, 0, []);
    return res;

    function backtrack(nums, start, path) {
        if (path.length === k && sum === n) {
            res.push([...path]);
            return;
        }

        if (sum > n) {
            return;
        }

        for (let i = start; i < nums.length; i++) {
            const num = nums[i];

            sum += num;
            path.push(num);

            backtrack(nums, i + 1, path);

            sum -= num;
            path.pop();
        }
    }
}

// @lc code=end
