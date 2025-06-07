

/*
 Fibonacci Number (a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. )

  5 = 0,1,1,2,3,5,8 

*/

// Normal Function Way
function fibonacciNumber(n) {
    let a = 0;
    let b = 1;
    for(let i = 2; i<n; i ++) {
        let c = a + b ;
        console.log(c);
        a = b ;
        b = c;
    }
}

//Function Expression
const fibonacciNumber = function(n) {
    let a = 0;
    let b = 1;
    for (let i = 2; i < n; i++) {
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
};


// Arrow function way 

const fibonacciNumber = (n) => {
     let a = 0;
    let b = 1;
    for(let i = 2; i<n; i ++) {
        let c = a + b ;
        console.log(c);
        a = b ;
        b = c;
    }
}

// Method inside an object
const fib = {
    fibonacciNumber: function(n) {
        let a = 0;
        let b = 1;
        for (let i = 2; i < n; i++) {
            let c = a + b;
            console.log(c);
            a = b;
            b = c;
        }
    }
};

fib.fibonacciNumber(5);

fibonacciNumber(5);


