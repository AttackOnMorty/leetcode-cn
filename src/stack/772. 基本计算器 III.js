/*
相比“面试题 16.26. 计算器”，多了 ( 和 )，除法向下截断

示例:
输入: s = "(2+6*3+5-(3*14/7+2)*5)+3"
输出: -12
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
        } else if (char === '(') {
            ops.push(char);
            i++;
        } else if (char === ')') {
            while (ops.length !== 0 && ops[ops.length - 1] !== '(') {
                fetchAndCal(nums, ops);
            }
            ops.pop();
            i++;
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
    if ((op1 === '*' || op1 === '/') && (op2 === '+' || op2 === '-')) {
        return true;
    }
    if (op2 === '(') {
        return true;
    }
    return false;
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

// ---------Test---------
console.log(calculate('(2+6*3+5-(3*14/7+2)*5)+3')); // -12
