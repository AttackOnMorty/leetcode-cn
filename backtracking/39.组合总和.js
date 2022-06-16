/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function combinationSum(candidates, target) {
    const res = [];
    let sum = 0;
    candidates.sort((a, b) => a - b);
    backtrack(candidates, 0, []);
    return res;

    function backtrack(candidates, start, path) {
        if (sum === target) {
            res.push([...path]);
            return;
        }

        if (sum > target) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            const candidate = candidates[i];

            sum += candidate;
            path.push(candidate);

            backtrack(candidates, i, path);

            sum -= candidate;
            path.pop();
        }
    }
}

// @lc code=end
