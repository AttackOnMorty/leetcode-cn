/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// O(9^n) / O(n)
function solveSudoku(board) {
    backtrack(board, 0, 0);
    return board;
}

// O(9^n) / O(n)
function backtrack(board, i, j) {
    const m = 9;
    const n = 9;

    if (i === m) return true;

    if (j === n) {
        return backtrack(board, i + 1, 0);
    }

    if (board[i][j] !== '.') {
        return backtrack(board, i, j + 1);
    }

    for (let num = 1; num <= 9; num++) {
        const char = String(num);
        if (!isValid(board, i, j, char)) continue;

        board[i][j] = char;
        if (backtrack(board, i, j + 1)) return true;
        board[i][j] = '.';
    }

    return false;
}

// O(n) / O(1)
function isValid(board, row, col, char) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === char) return false;
        if (board[i][col] === char) return false;
        if (
            board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][
                Math.floor(col / 3) * 3 + Math.floor(i % 3)
            ] === char
        )
            return false;
    }

    return true;
}

// @lc code=end
