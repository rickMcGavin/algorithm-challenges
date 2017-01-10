// FreeCodeCamp
// Advanced Algorithms
// Pairwise


/*
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6
*/





function pairwise(arr, arg) {

  // use reducer with acc, item, i (i for index)
  return arr.reduce(function(acc, item, i) {
    // loop through the array copy using standard for loop with j variable
    for (var j = i + 1; j < arr.length; j++) {
      // check if sum of arr[i] and arr[j] is equal to arg
      if (arr[i] + arr[j] === arg) {
        // add the indexs to the acc
        acc += i + j;
        // assign NaN to the current arr to prevent reuse
        arr[i] = arr[j] = NaN;
      }
    }
    return acc;
  }, 0);
}

console.log(pairwise([1,4,2,3,0,5], 7));
// 11

console.log(pairwise([7, 9, 11, 13, 15], 20));
// 6

console.log(pairwise([1, 3, 2, 4], 4));
// 1

console.log(pairwise([1, 1, 1], 2));
// 1
