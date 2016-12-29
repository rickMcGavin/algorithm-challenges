//FreeCodeCamp
// Advanced Algorithm Challenges
// Symmetric Difference

/*
 Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

 Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ * B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, * 3} = {1, 2, 3, 4}).
*/

function sym(args) {
  // create array from arguments
  var arr = Array.from(arguments);

  // function to compare two array & return an array containing only     // the symmetric different
  function symDiff(a, b) {
    var result = [];
    a.forEach(function(item) {
      if ( (!b.includes(item)) && (!result.includes(item)) ) {
        result.push(item);
      }
    });

    b.forEach(function(item) {
        if ( (!a.includes(item)) && (!result.includes(item)) ) {
          result.push(item);
        }
    });
    return result;
  }
  return arr.reduce(symDiff);
}


// Test Cases
console.log(sym([1, 2, 3], [5, 2, 1, 4])); // [3, 5, 4]
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); // [1, 4, 5]
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])); // [1, 4, 5]
