// OBJECTS are good for unordered data
// Insertion = O(1)
// Removal = O(1)
// Searching = O(N)
// Access = O(1)

// Object.keys = O(N)
// Object.values = O(N)
// Object.entries = O(N)
// Object.hasOwnProperty = O(1)



// Arrays (Ordered List)
// Insertion = O(it depends)
// Unshift = O(N)
// Pushing = O(1)
// Removing = O(it depends)
// Shift = O(N)
// Pop = O(1)
// Searching = O(N) in case empty array it i O(1) but we consider worst case senario
// Access = O(1)


/*
Big O of Array Operations

    push -   O(1)
    pop -   O(1)
    shift -   O(N)
    unshift -   O(N)
    concat -   O(N)
    slice -   O(N)
    splice -   O(N)
    sort -   O(N * log N)
    forEach/map/filter/reduce/etc. -   O(N)
*/