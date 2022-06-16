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
    let res = '';

    for (const char of address) {
        if (char === '.') {
            res += '[.]';
        } else {
            res += char;
        }
    }

    return res;
}

// @lc code=end
