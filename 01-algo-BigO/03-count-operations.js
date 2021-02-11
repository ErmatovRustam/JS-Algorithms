// here 3 operations (* , + and /)
function addUpTo(n) {
    return n * (n + 1) / 2;
}

// here number of operations (assignments = , comparing <=, incrementing and reassigning )
//5n + 2
function addUpTo(n) {
    let total = 0;     // 1
    for (let i = 1; i <= n; i++) { //1 + n + 2n
        total += i;     // 2n
    }
    return total;
}