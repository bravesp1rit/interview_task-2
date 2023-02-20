'use strict';
const fib = function (n = 1) {
    let exampleFib = [0, 1];
    if (n <= 1){
        return 0;
    }
    for (let i = 1; i < n; i++){
        exampleFib.push(exampleFib[exampleFib.length - 1] + exampleFib[exampleFib.length - 2]);
    }
    return exampleFib[n - 1];
};
console.log(fib(7));