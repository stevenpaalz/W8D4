const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`Is ${el1} > ${el2}?`, function(answer) {
    if (answer.toLowerCase() === 'yes') {
        callback(true);
    }
    else { callback(false); }
    
  })
}

// askIfGreaterThan(2, 1, arg => console.log(arg));
// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    console.log(madeAnySwaps);
    if (i === arr.length - 1) {
        
        
        outerBubbleSortLoop(madeAnySwaps);
    }
    else {
        askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
            if (isGreaterThan === true) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
        })
    }
}
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
  

// innerBubbleSortLoop([1,3,2,4,-3],0,false, outerBubbleSortLoop)

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
    } else {
        reader.close();
        sortCompletionCallback(arr)
    }
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }
  outerBubbleSortLoop(true)
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([5, 4, 3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});