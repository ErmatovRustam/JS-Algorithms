/*
What is recursion?
A process (a function in our case) that calls itself
*/

/*
How recursive functions work
Invoke the same function with a different input until you reach your base case!
*/

/*
Base Case
The condition when the recursion ends.
This is the most important concept to understand
*/

// Two main points of recursion are:
// 1. BASE CASE
// 2. DIFFERENT INPUT

//Example One
function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

//Example Two
function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num-1);
}

// When there is a wrong return or no base case it causes STACk LIMIT EXCEED OR STACK OVERFLOW!!!

//FACTORIAL
function factorial(num){
    if(num===1) return 1;
    return num * factorial(num-1)
}

factorial(4)




//###################### Helper Method Recursion ######################################
//POINT
function outer(input){
    var outerScopedVariable = []

    function helper(helperInput){
        // modify the outerScopedVariable
        helper(helperInput--)
    }
    helper(input)

    return outerScopedVariable;
}

// EXAMPLE
function collectOddValues(arr){
    let result = []
    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)

    return result;

}


//###################### Pure Recursion ################################################
function odds(arr){
    let newArr = [];

    if(arr.length === 0) return newArr;

    if(arr[0] % 2 === 1) newArr.push(arr[0]);
    newArr = newArr.concat(odds(arr.slice(1)))
    return newArr;
}

odds([1,2,3,4,5]); //[1,3,5]
