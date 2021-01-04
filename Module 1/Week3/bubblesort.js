//Sort the following #s using the BubbleSort
const bubbleSort = (arr) => { //creating the function
    let len = arr.length; //creating a length variable
    let swapped; // creating a variable to keep track of the amount of times the arrays are swapped
    do {
        swapped = false; //this is false if there were no swaps made in the array
        for (let i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) { // checks to see if the index [i] is greater than the index to the right
                let tmp = arr[i]; // creating a placeholder for the index[i]
                arr[i] = arr[i + 1]; // if [i+1] is true copy the value into the i index
                arr[i + 1] = tmp; // copy what was in index i into the index of [i+1] this finishes the swap
                swapped = true; //the variable swap will be true, which allows the loop to continue
            }
        }
    } while (swapped); //this while loop allows for 1 check before the code stops. making it more efficient
    return arr;
};
console.log(bubbleSort([5, 3, 8, 4, 6]));
