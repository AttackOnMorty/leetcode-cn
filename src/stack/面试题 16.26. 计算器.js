/*
面试题 16.26. 计算器

给定一个包含正整数、加(+)、减(-)、乘(*)、除(/)的算数表达式(括号除外)，计算其结果。
表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。

示例 1:
输入: "3+2*2"
输出: 7

示例 2:
输入: " 3/2 "
输出: 1

示例 3:
输入: " 3+5 / 2 "
输出: 5

说明：
你可以假设所给定的表达式都是有效的。
请不要使用内置的库函数 eval。

链接：https://leetcode.cn/problems/calculator-lcci
*/

/**
 * @param {string} s
 * @return {number}
 */
// O(n) / O(n)
function calculate(s) {
    const nums = [];
    const ops = [];
    let n = s.length;
    let i = 0;

    while (i < n) {
        const char = s[i];
        if (char === ' ') {
            i++;
        } else if (isDigit(char)) {
            let num = 0;
            do {
                num = num * 10 + Number(s[i]);
                i++;
            } while (i < n && isDigit(s[i]));
            nums.push(num);
        } else {
            if (ops.length === 0 || isPrior(char, ops[ops.length - 1])) {
                ops.push(char);
            } else {
                while (
                    ops.length !== 0 &&
                    !isPrior(char, ops[ops.length - 1])
                ) {
                    fetchAndCal(nums, ops);
                }
                ops.push(char);
            }
            i++;
        }
    }

    while (ops.length !== 0) {
        fetchAndCal(nums, ops);
    }

    return nums.pop();
}

function isDigit(char) {
    return char >= '0' && char <= '9';
}

function isPrior(op1, op2) {
    return (op1 === '*' || op1 === '/') && (op2 === '+' || op2 === '-');
}

function fetchAndCal(numStack, opStack) {
    const num2 = numStack.pop();
    const num1 = numStack.pop();
    const op = opStack.pop();
    numStack.push(cal(num1, num2, op));
}

function cal(num1, num2, op) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return Math.floor(num1 / num2);
        default:
            throw new Error(`Unsupported operation: ${op}`);
    }
}
