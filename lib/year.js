'use strict';

const _ = require('../node_modules/lodash/lodash');
const { generateMonth } = require('./month');


// generate output the top line of the annual calendar output
const generateYearHeader = function(year) {
  return(`                             ${year}\n`);
};


// generate month title row
const generateMonthTitleRow = function(row) {
  // row(1) = Jan-March
  if (row === 1) {
    return `      January               February               March\n`;
  }

  // row(2) = April-June
  else if (row === 2) {
    return `       April                  May                   June\n`;
  }

  // row(3) = July-Sep
  else if (row === 3) {
    return `        July                 August              Septermber\n`;
  }

  // row(4) = Oct-Dec
  else if (row === 4) {
    return `      October               November              December\n`;
  }

  else {
    console.log('invalid month row number');
  }
}

// create a string with the abbreviations of the days of the week
const generateWeekdayHeaderRow = function() {
  return `Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa`;
}



// generate rows for days of the month
const generateMonthDaysRows = function(row) {

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
  console.log("MONTHS", months);

  // remove month header

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
