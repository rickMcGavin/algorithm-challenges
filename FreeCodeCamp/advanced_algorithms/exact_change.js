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

  // function totals all cash in the drawer and returns it
  function checkCashInDrawer() {
    cid.forEach(function(item){
      totalCashInDrawer += item[1];
    });
    return Number(totalCashInDrawer.toFixed(2));
  }

  var totalCashInDrawer = 0;
  var change = cash - price;
  var denominations = [
    {name: "ONE HUNDRED", value: 100},
    {name: "TWENTY", value: 20},
    {name: "TEN", value: 10},
    {name: "FIVE", value: 5},
    {name: "ONE", value: 1},
    {name: "QUARTER", value: 0.25},
    {name: "DIME", value: 0.10},
    {name: "NICKEL", value: 0.05},
    {name: "PENNY", value: 0.01}
  ];
  totalCashInDrawer = checkCashInDrawer();
  cid = cid.reverse();



  // check if total cash in drawer is equal to the change amount
  if (totalCashInDrawer < change) {
    return "Insufficient Funds";
    // check if total cash in drawer is less than change amount
  } else if (totalCashInDrawer === change) {
    return "Closed";
  } else {
    var changeGiven = denominations.reduce(function(acc, next, i) {
      if (change > next.value) {
        var currentValue = 0.0;
        while (change >= next.value && cid[i][1] >= next.value) {
          currentValue += next.value;
          change -= next.value;
          change = Math.round(change * 100) / 100;
          cid[i][1] -= next.value;
        }
        acc.push([next.name, currentValue]);
        return acc;
      } else {
        return acc;
      }
    }, []);
    return changeGiven.length > 0 && change === 0 ? changeGiven: "Insufficient Funds";
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

// Test Cases

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
// should return an array

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
//[["QUARTER", 0.50]]

console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
//[["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]



console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// "closed"

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// "Insufficient Funds"
