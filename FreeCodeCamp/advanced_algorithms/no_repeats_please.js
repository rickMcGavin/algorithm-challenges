// FreeCodeCamp
// Advanced Algorithms challenge
// No Repeats Please

/*
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/

function permAlone(str) {
  // declare variables
  var arr = str.split("");
  var n = arr.length;
  var regex = /(.)\1/g;
  var permArr = [];

  // swap function to switch items in array at specified indices.
  function swap(arr, index1, index2) {
    var placeHolder = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = placeHolder;
  }

  // use Heap's algorithm to get the number of permutations
 var heapIt = function (arr, n) {
   if (n === 1) {
     permArr.push(arr.join(""));
   }
   for (var i = 0; i < n; i++) {
     heapIt(arr, n-1);
     if (n % 2 === 0) {
       swap(arr, i, n - 1);
     } else {
       swap(arr, 0, n - 1);
     }
   }
 };

 heapIt(arr, n);

 //filter array containing permutations to non-repeats and return the length
 return permArr.filter(function(str) {
   return !str.match(regex);
 }).length;
}

console.log(permAlone("aab")); // 2
console.log(permAlone("a")); // 1
console.log(permAlone("abcd")); // 24
