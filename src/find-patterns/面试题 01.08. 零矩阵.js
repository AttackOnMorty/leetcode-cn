/*
面试题 01.08.零矩阵

编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。

示例 1：
输入：
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出：
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]

示例 2：
输入：
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出：
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]

链接：https://leetcode-cn.com/problems/zero-matrix-lcci
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// O(m * n) / O(m + n)
function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const zeroRows = [];
    const zeroColumns = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                zeroRows[i] = true;
                zeroColumns[j] = true;
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (zeroRows[i] || zeroColumns[j]) {
                matrix[i][j] = 0;
            }
        }
    }
}
