'use strict';

const _ = require('../node_modules/lodash/lodash');
const generateMonth = require('./month').generateMonth;


// generate output the top line of the annual calendar output
const generateYearHeader = function(year) {
  return(`                             ${year}\n`);
};


// generate month title row
const generateMonthTitleRow = function(row) {
  // row(1) = Jan-March
  if (row === 1) {
    return `      January               February               March`;
  }

  // row(2) = April-June
  else if (row === 2) {
    return `       April                  May                   June`;
  }

  // row(3) = July-Sep
  else if (row === 3) {
    return `        July                 August              Septermber`;
  }

  // row(4) = Oct-Dec
  else if (row === 4) {
    return `      October               November              December`;
  }

  else {
    console.log('invalid month row number');
  }
}

// create a string with the abbreviations of the days of the week
const generateWeekdayHeaderRow = function() {
  return `Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa`;
}


// generate year calendar for a given year input
const generateYear = function(year) {
  let output = [];

  // create year header output
  output.push(generateYearHeader(year));


  // add first row of month headers (1 of 4 rows)
  output.push(generateMonthTitleRow(1));

  // add row of weekday headers
  output.push(generateWeekdayHeaderRow());

  // generate array of months
  const months = _.range(1,13).map( num => generateMonth(num, year) );

  // format months to be just the day numbers with correct spacing
  let monthWeeks = months.map( (week) => { return week.splice(2, week.length) });

  monthWeeks = monthWeeks.map( (month) => {
    month = month.map( (week) => {

      // ensure each week is the same number of spaces
      while (week.length < 20)  { week += " " }

      // clean trailing white space from each line
      if (week.length > 20) { week = week.slice(0,week.length-1) }
      return week;

    });
      if (month.length < 6) { month.push("                    ")}
      console.log("month length = : ", month.length);
      return month;

  });

  output.push(monthWeeks[0][0]+"  "+monthWeeks[1][0]+"  "+monthWeeks[2][0]);
  output.push(monthWeeks[0][1]+"  "+monthWeeks[1][1]+"  "+monthWeeks[2][1]);
  output.push(monthWeeks[0][2]+"  "+monthWeeks[1][2]+"  "+monthWeeks[2][2]);
  output.push(monthWeeks[0][3]+"  "+monthWeeks[1][3]+"  "+monthWeeks[2][3]);
  output.push(monthWeeks[0][4]+"  "+monthWeeks[1][4]+"  "+monthWeeks[2][4]);
  output.push(monthWeeks[0][5]+"  "+monthWeeks[1][5]+"  "+monthWeeks[2][5]);

  // add second row of month headers (2 of 4 rows)
  output.push(generateMonthTitleRow(2));

  // add row of weekday headers
  output.push(generateWeekdayHeaderRow());

  output.push(monthWeeks[0][0]+"  "+monthWeeks[1][0]+"  "+monthWeeks[2][0]);
  output.push(monthWeeks[0][1]+"  "+monthWeeks[1][1]+"  "+monthWeeks[2][1]);
  output.push(monthWeeks[0][2]+"  "+monthWeeks[1][2]+"  "+monthWeeks[2][2]);
  output.push(monthWeeks[0][3]+"  "+monthWeeks[1][3]+"  "+monthWeeks[2][3]);
  output.push(monthWeeks[0][4]+"  "+monthWeeks[1][4]+"  "+monthWeeks[2][4]);
  output.push(monthWeeks[0][5]+"  "+monthWeeks[1][5]+"  "+monthWeeks[2][5]);

    // add third row of month headers (3 of 4 rows)
  output.push(generateMonthTitleRow(3));

  // add row of weekday headers
  output.push(generateWeekdayHeaderRow());

  output.push(monthWeeks[0][0]+"  "+monthWeeks[1][0]+"  "+monthWeeks[2][0]);
  output.push(monthWeeks[0][1]+"  "+monthWeeks[1][1]+"  "+monthWeeks[2][1]);
  output.push(monthWeeks[0][2]+"  "+monthWeeks[1][2]+"  "+monthWeeks[2][2]);
  output.push(monthWeeks[0][3]+"  "+monthWeeks[1][3]+"  "+monthWeeks[2][3]);
  output.push(monthWeeks[0][4]+"  "+monthWeeks[1][4]+"  "+monthWeeks[2][4]);
  output.push(monthWeeks[0][5]+"  "+monthWeeks[1][5]+"  "+monthWeeks[2][5]);

  // add fourth row of month headers (4 of 4 rows)
  output.push(generateMonthTitleRow(4));

  // add row of weekday headers
  output.push(generateWeekdayHeaderRow());

  output.push(monthWeeks[0][0]+"  "+monthWeeks[1][0]+"  "+monthWeeks[2][0]);
  output.push(monthWeeks[0][1]+"  "+monthWeeks[1][1]+"  "+monthWeeks[2][1]);
  output.push(monthWeeks[0][2]+"  "+monthWeeks[1][2]+"  "+monthWeeks[2][2]);
  output.push(monthWeeks[0][3]+"  "+monthWeeks[1][3]+"  "+monthWeeks[2][3]);
  output.push(monthWeeks[0][4]+"  "+monthWeeks[1][4]+"  "+monthWeeks[2][4]);
  output.push(monthWeeks[0][5]+"  "+monthWeeks[1][5]+"  "+monthWeeks[2][5]);

  return output;
};


// output calender year to console
const printYear = function(output) {
  output.forEach((line) => console.log(line));
}


// export public functions
module.exports = {
  generateYear,
  printYear
}
