/*
 * @lc app=leetcode.cn id=1108 lang=javascript
 *
 * [1108] IP 地址无效化
 */

// @lc code=start
/**
 * @param {string} address
 * @return {string}
 */

// O(n) / O(n)
function defangIPaddr(address) {
    let result = '';

    for (const char of address) {
        if (char !== '.') {
            result += char;
        } else {
            result += '[.]';
        }
    }

    return result;
}

// @lc code=end
