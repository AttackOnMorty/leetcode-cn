/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function combinationSum2(candidates, target) {
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
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            const candidate = candidates[i];

            sum += candidate;
            path.push(candidate);

            backtrack(candidates, i + 1, path);

            sum -= candidate;
            path.pop();
        }
    }
}

// @lc code=end
