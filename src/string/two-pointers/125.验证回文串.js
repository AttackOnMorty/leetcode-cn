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
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (!isAlpha(s[left])) {
            left++;
            continue;
        }

        if (!isAlpha(s[right])) {
            right--;
            continue;
        }

        if (toLower(s[left]) !== toLower(s[right])) {
            return false;
        } else {
            left++;
            right--;
        }
    }

    return true;
}

// O(1) / O(1)
function isAlpha(char) {
    if (char >= 'a' && char <= 'z') {
        return true;
    }

    if (char >= 'A' && char <= 'Z') {
        return true;
    }

    if (char >= '0' && char <= '9') {
        return true;
    }

    return false;
}

// O(1) / O(1)
function toLower(char) {
    return char >= 'A' && char <= 'Z' ? char.toLowerCase() : char;
}

// @lc code=end
