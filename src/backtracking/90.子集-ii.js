/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// O(2^n) / O(n)
function subsetsWithDup(nums) {
    const res = [];
    backtrack(nums, 0, []);
    return res;

    function backtrack(nums, start, path) {
        res.push([...path]);

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;

            path.push(nums[i]);
            backtrack(nums, i + 1, path);
            path.pop();
        }
    }
}

// @lc code=end
