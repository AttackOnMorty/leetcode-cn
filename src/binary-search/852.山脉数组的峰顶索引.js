/*
 * @lc app=leetcode.cn id=852 lang=javascript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */

// O(logn) / O(1)
function peakIndexInMountainArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        } else if (arr[mid] > arr[mid + 1]) {
            right = mid - 1;
        }
    }

    return left;
}

// @lc code=end
