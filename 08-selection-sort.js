/*
Selection Sort looks like a Bubble sort but it starts with smallest value and puts at the beginning.

It is a bit better than Bubble Sort during swapping. Because it does the swap only at the END of the loop once, while Bubble sort
does swapping after each comparison.

It loops first, finds minimum value and swaps with first one, then second and soon.
*/
//MY EXAMPLE
function select(arr){
    for(let i = 0; i<arr.length; i++){
        let min = i;
        for(let j = i+1; j<arr.length; j++){
            if(arr[min] > arr[j]){
                min = j
            }
        }

        if(arr[i] !== arr[min]){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }

    }
    return arr;
}

select([1,2,4,3,6,5])


// LEGACY VERSION (non ES2015 syntax)
function sselectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}


// ES2015 VERSION
function selectionSort(arr) {
    const swap = (arr, idx1, idx2) =>
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        if (i !== lowest) swap(arr, i, lowest);
    }

    return arr;
}

selectionSort([0,2,34,22,10,19,17]);