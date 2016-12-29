// FreeCodeCamp
// Advanced Algorithm Challenge
// Exact Challenge

/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.
*/

function checkCashRegister(price, cash, cid) {
  var change;

  // function totals all cash in the drawer and returns it
  function checkCashInDrawer() {
    var totalCashInDrawer = 0;
    cid.forEach(function(item){
      totalCashInDrawer += item[1];
    });
    return Number(totalCashInDrawer.toFixed(2));
  }

  var totalCashInDrawer = checkCashInDrawer();
  change = cash - price;


  // check if total cash in drawer is equal to the change amount
  if (totalCashInDrawer === change) {
    return "closed";
  }

  // check if total cash in drawer is less than change amount
  if (totalCashInDrawer < change) {
    return "Insufficient Funds";
  }


}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])); // should return an array

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // "closed"
