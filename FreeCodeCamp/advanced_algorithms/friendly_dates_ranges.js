// FreeCodeCamp
// Advanced Algorithm Challenge
// Friednly Date Ranges

/*
Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.
*/

// declare array of all the months in words
var month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function makeOrdinal(num) {
  if (num === 1  || num === 21 || num === 31) {
      return num.toString() + "st";
    } else if (num === 2 || num === 22) {
      return num.toString() + "nd";
    } else if (num === 3 || num === 23) {
      return num.toString() + "rd";
    } else {
      return num.toString() + "th";
    }
}


function makeFriendlyDates(arr) {

  var year = new Date().getFullYear();
  var first = new Date(Date.parse((arr[0]).replace("-", "/")));
  var second = new Date(Date.parse((arr[1]).replace("-", "/")));
  var yearMilliseconds = 31536000000;

  var firstMonth = first.getMonth();
  var firstDay = first.getDay();
  var firstYear = first.getFullYear();

  // console.log(month[firstMonth] + " " + firstDay.toString() + " " + firstYear.toString());
  //
  // if (first.getMonth() === second.getMonth()) {
  //
  // }

}

console.log(makeFriendlyDates(["2016-07-01", "2016-07-04"]));
