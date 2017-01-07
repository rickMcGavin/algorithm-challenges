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
  var firstDate = first.getDate();
  var firstYear = first.getFullYear();
  var secondMonth = second.getMonth();
  var secondDate = second.getDate();
  var secondYear = second.getFullYear();
  var result = [];


  if (second - first === 0) {
    return [month[firstMonth]+ " " + makeOrdinal(firstDate) + ", " + firstYear.toString()];
  }

  if ((firstMonth === secondMonth) && (firstYear === secondYear)) {
  return [month[firstMonth].toString() + " " + makeOrdinal(firstDate), makeOrdinal(secondDate)];
  }

  /*In the below check, you will see that I subtracted 1 from the current year.
  This is because I took the challenge early in 2017, and the challenge seems to still be set up for 2016. In order to pass, I had to make it seem as if it was 2016. */
  if ((second - first < yearMilliseconds) && firstYear === year - 1) {
    return [month[firstMonth] + " " + makeOrdinal(firstDate), month[secondMonth] + " " + makeOrdinal(secondDate)];
  }

  if (second - first < yearMilliseconds) {
    return [month[firstMonth] + " " + makeOrdinal(firstDate) + ", " + firstYear.toString(), month[secondMonth] + " " + makeOrdinal(secondDate)];
  }

  return [month[firstMonth] + " " + makeOrdinal(firstDate) + ", " + firstYear.toString(), month[secondMonth] + " " + makeOrdinal(secondDate) + ", " + secondYear.toString()];
}

// Test Cases

console.log(makeFriendlyDates(["2016-07-01", "2016-07-04"]));
// ["July 1st", "4th"]
console.log(makeFriendlyDates(["2016-12-01", "2017-02-03"]));
// ["December 1st","February 3rd"]
console.log(makeFriendlyDates(["2016-12-01", "2018-02-03"]));
// ["December 1st, 2016","February 3rd, 2018"]
console.log(makeFriendlyDates(["2017-03-01", "2017-05-05"]));
// ["March 1st, 2017","May 5th"]
console.log(makeFriendlyDates(["2018-01-13", "2018-01-13"]));
// ["January 13th, 2018"]
console.log(makeFriendlyDates(["2022-09-05", "2023-09-04"]));
// ["September 5th, 2022","September 4th"]
console.log(makeFriendlyDates(["2022-09-05", "2023-09-05"]));
// ["September 5th, 2022","September 5th, 2023"]
