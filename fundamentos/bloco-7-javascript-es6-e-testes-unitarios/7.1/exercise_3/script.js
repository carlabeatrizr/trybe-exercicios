const iterativeFactorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
};

const recursiveFactorial = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * recursiveFactorial(n - 1);
};

const factorialTernaryOperator = (n) => n === 0 ? 1 : n * factorialTernaryOperator(n - 1);