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

// O(n!) / O(n)
function subsets(nums) {
    const result = [];
    backtrack(nums, 0, []);
    return result;

    function backtrack(nums, start, path) {
        result.push([...path]);

        for (let i = start; i < nums.length; i++) {
            const num = nums[i];
            if (path.includes(num)) continue;
            path.push(num);
            backtrack(nums, i + 1, path);
            path.pop();
        }
    }
}

// @lc code=end
