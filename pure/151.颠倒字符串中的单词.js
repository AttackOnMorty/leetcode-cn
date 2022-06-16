/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// O(n) / O(n)
function reverseWords(s) {
    const arr = trim([...s]);
    const n = arr.length;

    reverse(arr, 0, n - 1);

    let i = 0;
    let j = 0;
    while (j < n) {
        if (arr[j + 1] === ' ' || j === n - 1) {
            reverse(arr, i, j);
            i = j + 2;
            j = i;
        } else {
            j++;
        }
    }

    return arr.join('');
}

// O(n) / O(1)
function trim(arr) {
    const n = arr.length;

    let start = 0;
    while (arr[start] === ' ') {
        start++;
    }

    let k = 0;
    for (let i = start; i < n; i++) {
        if (arr[i] === ' ') {
            if (arr[i + 1] !== ' ' && i < n - 1) {
                arr[k++] = ' ';
            }
        } else {
            arr[k++] = arr[i];
        }
    }

    return arr.slice(0, k);
}

// O(n) / O(1)
function reverse(arr, i, j) {
    while (i < j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        i++;
        j--;
    }
}

// @lc code=end
