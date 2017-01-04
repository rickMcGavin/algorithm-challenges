// FreeCodeCamp
// Advanced Algorithms
// Inventory Update

/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
*/

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!

  var check = false;

  arr2.forEach(function(itemTwo) {
    check = false;
    arr1.forEach(function(itemOne) {
      if (itemOne[1] === itemTwo[1]) {
        itemOne[0] += itemTwo[0];
        check = true;
      }
    });
    if (check === false) {
      arr1.push(itemTwo);
    }
  });

  return arr1.sort(function(a, b) {
    if (a[1] > b[1]) {
      return 1;
    } else {
      return -1;
    }
  });
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
