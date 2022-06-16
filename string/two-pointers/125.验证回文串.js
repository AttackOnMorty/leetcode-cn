/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

// O(n) / O(1)
function isPalindrome(s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (!isAlpha(s[i])) {
            i++;
            continue;
        }

        if (!isAlpha(s[j])) {
            j--;
            continue;
        }

        if (toLower(s[i]) !== toLower(s[j])) {
            return false;
        } else {
            i++;
            j--;
        }
    }

    return true;
}

// O(1) / O(1)
function isAlpha(char) {
    return (
        (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z') ||
        (char >= '0' && char <= '9')
    );
}

// O(1) / O(1)
function toLower(char) {
    return char >= 'A' && char <= 'Z' ? char.toLowerCase() : char;
}

// @lc code=end
