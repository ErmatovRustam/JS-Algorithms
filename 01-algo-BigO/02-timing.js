// Problem 01
/* Suppose we want to write a function that calculates the
sum of all numbers from 1 up to (and including) some number n.*/

//Solution #1 runtime O(N)
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
//Input 3
// Output 6

//Solution #2 runtime O(1)
function addUpTo(n) {
    return n * (n + 1) / 2;
}
//Input 3
// Output 6

// #############################################################################################
// TIMING
// To Compare which one is good we have to check with timing
// Solution #1
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)



// Solution #2 much more faster
function addUpTo(n) {
    return n * (n + 1) / 2;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)