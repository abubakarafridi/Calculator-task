function calculate() {
    let input = document.getElementById('calcInput');
    let result = parseAndCalculate(input.value);
    input.value = result;
}

function parseAndCalculate(input) {
    let result = 0;
    let currentNum = '';
    let currentOp = '+';

    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        if (char === '+' || char === '-' || char === '*' || char === '/') {
            if (currentOp === '+') {
                result += Number(currentNum);
            } else if (currentOp === '-') {
                result -= Number(currentNum);
            } else if (currentOp === '*') {
                result *= Number(currentNum);
            } else if (currentOp === '/') {
                result /= Number(currentNum);
            }

            currentOp = char;
            currentNum = ''; 
        } else {
            currentNum += char;
        }
    }

    if (currentOp === '+') {
        result += Number(currentNum);
    } else if (currentOp === '-') {
        result -= Number(currentNum);
    } else if (currentOp === '*') {
        result *= Number(currentNum);
    } else if (currentOp === '/') {
        result /= Number(currentNum);
    }

    return result;
}