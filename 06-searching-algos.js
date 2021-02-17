// Linear Search
/*. O(N) build-in functions
	indexOf
    includes
    find
    findIndex
*/

// In Linear Search best case O(1) average case O(N) and worst case is also O(N), we eliminate constants
function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

linearSearch([34,51,1,2,3,45,56,687], 100)


//#########################################################################################
//### **1. Binary Search only on SORTES ARRAYS - idea is DIVIDE AND CONQUER**
/*  Binary Search.  BigO - Worst and Average is - O(Log N), Best case - O(1)
		* Only on Sorted Array
		* by eliminating half of the remainning elements
*/

function binarySearch(arr, val){
    let left = 0;
    let right = arr.length;
    let mid = Math.floor((right + left) / 2);
    while(left <= right && arr[mid] !== val){
        if(arr[mid] > val) right = arr[mid] - 1;
        else if(arr[mid] < val){left = arr[mid] + 1};
        mid = Math.floor((right + l) / 2);
    }
    return arr[mid] === val ? mid : -1;
}

binarySearch([34,51,1,2,3,45,56,687], 3)



// Author Solution
// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)


// Subsrting Search Function. Naive Solution
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
            if(short[j] !== long[i+j]) break;
            if(j === short.length - 1) count++;
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")