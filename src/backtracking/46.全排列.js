/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// O(n!) / O(n)
function permute(nums) {
    const result = [];
    backtrack(nums, 0, []);
    return result;

    function backtrack(nums, n, path) {
        if (n === nums.length) {
            result.push([...path]);
            return;
        }

        for (const num of nums) {
            if (path.includes(num)) continue;
            path.push(num);
            backtrack(nums, n + 1, path);
            path.pop(num);
        }
    }
}

// @lc code=end
