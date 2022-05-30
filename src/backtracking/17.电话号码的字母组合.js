/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */

// O(3^m + 4^n) / O(m + n)
function letterCombinations(digits) {
    const keyBoard = [
        '',
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz',
    ];
    const result = [];
    backtrack(keyBoard, 0, []);
    return result;

    function backtrack(keyBoard, i, path) {
        if (i === digits.length) {
            if (path.length !== 0) {
                result.push(path.join(''));
            }
            return;
        }

        for (const char of keyBoard[digits[i] - 1]) {
            path.push(char);
            backtrack(keyBoard, i + 1, path);
            path.pop(char);
        }
    }
}

// @lc code=end
