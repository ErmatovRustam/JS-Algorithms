// Build-In Sorting Algorithm
/*
Usually O(N^2), best case O(N) - when nearly sorted data with break.
The default sort order is ascending, built upon converting the elements into strings,
then comparing their sequences of UTF-16 code units values.
*/

// String Sort
[ "Steele", "Colt", "Data Structures", "Algorithms" ].sort();
// [ "Algorithms", "Colt", "Data Structures", "Steele" ]

//Number Sort
[ 6, 4, 15, 10 ].sort();
// [ 10, 15, 4, 6 ]

//To sort the numbers we need function to clarify how we want to sort it.
function numberCompare(num1, num2) {
    return num1 - num2;
}
[ 6, 4, 15, 10 ].sort(numberCompare);
// [ 4, 6, 10, 15 ]

//String Sorting with Function
function compareByLen(str1, str2) {
    return str1.length - str2.length;
}

[ "Steele", "Colt", "Data Structures", "Algorithms" ]
    .sort(compareByLen);
// [ "Colt", "Steele", "Algorithms", "Data Structures" ]



//#########################################################################################
//Bubble Sort with SWAP

//Bubble Sort with SWAP
// It takes two values and compares and swaps, then compares with next one and swaps
// ES5
function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}

//My Example
function bubble(arr){
    for(let i = arr.length - 1; i>=0; i--){
        for(let j = 0; j< i; j++){
            console.log('before ' + arr)
            console.log('compare ' + arr[j] + ' and ' + arr[j + 1])
            if(arr[j] > arr[j+1]){
                console.log('swap')
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            console.log('result ' + arr)
        }

    }
    return arr

}

bubble([5,4,3,6])



//#########################################################################################
//Bubble Sort with Examples

//Bubble Sort with Examples
// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr){
    for(var i = arr.length; i > 0; i--){
        for(var j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// ES2015 Version
function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);




//#################################################################################################
//Optimized Bubble Sort with Breaking point if in the middle of iteration is already sorted. (Nearly sorted data)

//Optimized Bubble Sort with Breaking point if in the middle of iteration is already sorted. (Nearly sorted data)
// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
        noSwaps = true;
        for(var j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);
