
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!

  // loop through each sub-array at index 1
  var arr3 = arr1.map(function(curr, index) {
      return curr[1];
  });

  var arr4 = arr2.map(function(curr, index) {
    return curr[1];
  });

  arr4.forEach(function(item) {
    if (arr3.includes(item)) {
      console.log(item);
    }
  });

 // I am not particularly sure I am even on the right track here.
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
