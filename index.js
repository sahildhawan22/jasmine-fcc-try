let fiboArr = [0, 1];
function fibonacci(n) {
    for(i = 0; i < n-1; i++) {
        fiboArr.push(-1);
    }
    console.log(`Initial fiboArr: ${fiboArr}`);
    fibonacciUtil(n);
}
function fibonacciUtil(n) {
    if(n === 1) return 1;
    if(n === 0) return 0;
    else {
        if(fiboArr[n] !== -1) {
            return fiboArr[n];
        }
        fiboArr[n]= fibonacciUtil(n-1) + fibonacciUtil(n-2);
        return fiboArr[n];
    }
}

fibonacci(100);
console.log(fiboArr);

function isPrime(n) {
    let flag = 0;
    for(i = 2; i < n; i++) {
        if(n % i === 0) {
            flag++;
        }
    }
    return flag > 0 ? true : false;
}

function isEven(n) {
    return n % 2 == 0;
}
function isOdd(n) {
    return Math.abs(n % 2) == 1;
}

function toLowerCase(str){
    return str.toLowerCase();
}
function toUpperCase(str){
    return str.toUpperCase();
}
function contains(str, substring, fromIndex){
    return str.indexOf(substring, fromIndex) !== -1;
}
function repeat(str, n){
    return (new Array(n + 1)).join(str);
}

function simulateAsyncOp(callback) {
    setTimeout(function() { callback() }, 2000);
}

function simulateAsyncAwait() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(true), 2000)
    })
}

module.exports = {
    fibonacci: fibonacci,
    isPrime: isPrime,
    isEven: isEven,
    isOdd: isOdd,
    toLowerCase: toLowerCase,
    toUpperCase: toUpperCase,   
    contains: contains,
    repeat: repeat,
    simulateAsyncOp: simulateAsyncOp,
    simulateAsyncAwait: simulateAsyncAwait
}