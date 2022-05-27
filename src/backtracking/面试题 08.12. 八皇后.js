/*
面试题 08.12. 八皇后

设计一种算法，打印 N 皇后在 N × N 棋盘上的各种摆法，其中每个皇后都不同行、不同列，也不在对角线上。这里的“对角线”指的是所有的对角线，不只是平分整个棋盘的那两条对角线。

注意：本题相对原题做了扩展

示例:
 输入：4
 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 解释: 4 皇后问题存在如下两个不同的解法。
[
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]

链接：https://leetcode.cn/problems/eight-queens-lcci
*/

/**
 * @param {number} n
 * @return {string[][]}
 */

// O(n!) / O(n)
function solveNQueens(n) {
    const board = [...Array(n)].map((_) => [...Array(n).fill('.')]);
    const result = [];
    backtrack(board, 0);
    return result;

    function backtrack(board, row) {
        if (row === board.length) {
            result.push(board.map((item) => item.join('')));
            return;
        }

        for (let col = 0; col < board[0].length; col++) {
            if (!isValid(board, row, col)) continue;
            board[row][col] = 'Q';
            backtrack(board, row + 1);
            board[row][col] = '.';
        }
    }

    function isValid(board, row, col) {
        for (let i = row - 1; i >= 0; i--) {
            if (board[i][col] === 'Q') return false;
        }

        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }

        for (
            let i = row - 1, j = col + 1;
            i >= 0 && j < board.length;
            i--, j++
        ) {
            if (board[i][j] === 'Q') return false;
        }

        return true;
    }
}
