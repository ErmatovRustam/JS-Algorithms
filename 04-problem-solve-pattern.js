/*
# **`Master common problem solving patterns`**

# SOME PATTERNS... programming mechanisms which is common in the interviews
- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
- **Many more!**
*/


//###############################################################################################################
// # **`FREQUENCY COUNTER`**
// In JS we use objects for frequencies to avoid O(N^2) which is nested loop.
/*
AN EXAMPLE
Write a function called same, which accepts two arrays.
The function should return true if every value in the array has it's corresponding value **squared** in the second array.
The frequency of values must be the same.
Order can be different but the frequency should be same.
*/
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency).

// 1. Naive Solution O(N^2) because of the nested loop.
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true
}

// 2. REFACTORED Solution Time Complexity - O(N). Three loops which runs seperatly is much better than nested loop.
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}



//###############################################################################################################
// # **`ANAGRAMS`**
/*
ANAGRAMS
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another,
such as cinema, formed from iceman.
*/
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

// My solution
function anagram(word1, word2){
    let obj1 = {};
    let obj2 = {};

    for(let char in word1){
        (obj1[char]) = (obj1[char] || 0) + 1;
    }
    for(let char in word2){
       (obj2[char]) = (obj2[char] || 0) + 1;
    }
    for(let char in obj1){
       if(obj1[char] !== obj2[char]) return false
    }

    return true
}
anagram('anagram', 'nangram')

//Better solution
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')




//###############################################################################################################
// # **`MULTIPLE POINTERS`**
/*
countUniqueValues
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.
*/
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4

function countUniqueValues(arr){

}

//1. My Solution.
function countUniqueValues(arr){
    if(arr.length < 1) return 0
    let j = 1;
    let i = 0;
    while(j < arr.length){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }else{
            j++;
        }
    }
    return i+1;
}

countUniqueValues([1,1,2,2,2,2,3,4,4,5]) // 5

//Another solution.
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])

//##################################################################################
/*
countUniqueValues
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.
*/
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4

function countUniqueValues(arr){

}

//1. My Solution.
function countUniqueValues(arr){
    if(arr.length < 1) return 0
    let j = 1;
    let i = 0;
    while(j < arr.length){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }else{
            j++;
        }
    }
    return i+1;
}

countUniqueValues([1,1,2,2,2,2,3,4,4,5]) // 5

//Another solution.
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])





//###############################################################################################################
// # **`SLIDING WINDOW`**
/*
SLIDING WINDOW
This pattern involves creating a window which can either be an array or number from one position to another
Depending on a certain condition, the window either increases or closes (and a new window is created)
Very useful for keeping track of a subset of data in an array/string etc.
*/
/*
An Example
Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array.
*/
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null

//1. Naive Solution.Time Complexity - O(N^2)
function maxSubarraySum(arr, num) {
    if ( num > arr.length){
        return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++){
        temp = 0;
        for (let j = 0; j < num; j++){
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

//2. Better Solution. Time Complexity - O(N)
function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}





//###############################################################################################################
// # **`DIVIDE AND CONQUER`**
/*
This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
This pattern can tremendously decrease time complexity
*/
/*
An Example
Given a sorted array of integers, write a function called search,
that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1
*/
search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1

//1. Naive Solution. Linear Search. Time Complexity - O(N)
function search(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}

//2. Better Soluton. Binary Search. Time Complexity - Log(N)
function search(array, val) {

    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if (array[middle] < val) {
            min = middle + 1;
        }
        else if (array[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }

    return -1;
}