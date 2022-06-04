/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// O(2^n) / O(n)
function subsets(nums) {
    const res = [];
    backtrack(nums, 0, []);
    return res;

    function backtrack(nums, start, path) {
        res.push([...path]);

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(nums, i + 1, path);
            path.pop();
        }
    }
}

// @lc code=end
