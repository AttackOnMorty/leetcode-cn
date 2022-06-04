/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// O(n!) / O(n)
function permuteUnique(nums) {
    const res = [];
    const used = [];
    nums.sort((a, b) => a - b);
    backtrack(nums, []);
    return res;

    function backtrack(nums, path) {
        const n = nums.length;
        if (path.length === n) {
            res.push([...path]);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (used[i]) continue;
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

            const num = nums[i];
            path.push(num);
            used[i] = true;
            backtrack(nums, path);
            path.pop(num);
            used[i] = false;
        }
    }
}

// @lc code=end
