/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(logn) / O(1)
function searchRange(nums, target) {
    const left = findLeftIndex(nums, target);
    const right = findRightIndex(nums, target);
    return [left, right];
}

function findLeftIndex(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) >> 1);
        const num = nums[mid];

        if (num < target) {
            left = mid + 1;
        } else if (num >= target) {
            right = mid - 1;
        }
    }

    return nums[left] === target ? left : -1;
}

function findRightIndex(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) >> 1);
        const num = nums[mid];

        if (num <= target) {
            left = mid + 1;
        } else if (num > target) {
            right = mid - 1;
        }
    }

    return nums[right] === target ? right : -1;
}

// @lc code=end
