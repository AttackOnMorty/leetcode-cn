/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

// O(logn) / O(1)
function nextGreatestLetter(letters, target) {
    let left = 0;
    let right = letters.length - 1;

    while (left < right) {
        const mid = left + ((right - left) >> 1);
        const letter = letters[mid];

        if (letter <= target) {
            left = mid + 1;
        } else if (letter > target) {
            right = mid;
        }
    }

    return letters[left] <= target ? letters[0] : letters[left];
}

// @lc code=end
