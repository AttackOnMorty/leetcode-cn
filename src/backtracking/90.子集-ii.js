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

// O(n!) / O(n)
function subsetsWithDup(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    backtrack(nums, 0, []);
    return result;

    function backtrack(nums, start, path) {
        result.push([...path]);

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;
            path.push(nums[i]);
            backtrack(nums, i + 1, path);
            path.pop();
        }
    }
}

// @lc code=end
