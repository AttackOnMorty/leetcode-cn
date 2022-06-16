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
    backtrack(nums, []);
    return result;

    function backtrack(nums, path) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (const num of nums) {
            if (path.includes(num)) continue;
            path.push(num);
            backtrack(nums, path);
            path.pop(num);
        }
    }
}

function permute(nums) {
    const result = [];
    const used = [];
    backtrack(nums, []);
    return result;

    function backtrack(nums, path) {
        const n = nums.length;
        if (path.length === n) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (used[i]) continue;
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
