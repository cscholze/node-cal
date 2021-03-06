'use strict';

// import modules and functions
const _ = require('lodash');
const getDay = require('./zellers').getDay;


// validate month input
const isValidMonth = function(month) {
  if (typeof month !== 'number') {
    console.log('IVM1');
    return false;
  }
  else if (month%1 !== 0) {
    console.log('IVM2');
    return false;
  }
  else if (month < 1 || month > 12) {
    console.log('IVM3');
    return false;
  }
  else {
    return true;
  }
};


// validate year input
const isValidYear = function (year) {
  if (typeof year !== 'number') {
    console.log('IVY 1');
    return false;
  }
  else if (year%1 !== 0) {
    console.log('INV2');
    return false;
  }
  else if (year < 1753 || year > 9999) {
    console.log('IVY3');
    return false
  }
  else {
    return true;
  }
};


// return true if year is a leap year
const isLeapYear = function (year) {
  if (year % 4 !== 0) {
    return false;
  }
  else if (year % 100 !== 0) {
    return true;
  }
  else if (year % 400 !== 0) {
    return false;
  }
  else {
    return true
  }
}


// function to center the month & year on the first line
const getCenteredHeader = function(nameOfMonth, year) {
  //calculate leading spaces
  let leadingSpaces = Math.floor((15-nameOfMonth.length)/2);

  let header = "";
  // generate leading spaces
  for (let i = 1; i <= leadingSpaces; i++) {
    header += " ";
  }
  header = `${header}${nameOfMonth} ${year}`;
  return header;
};


// require isLeapYear() to determine days in February
let monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
let monthNames = ['January','February','March','April',
                  'May','June','July','August','September',
                  'October','November','December'];


// generateMonth()
const generateMonth = function(month, year) {
  let output =[];

  // check for valid arguments
  if (!isValidYear(year) || !isValidMonth(month)) {
    console.log('not valid input');
    return false;
  }


  // adjust days in february if a leap year
  if(isLeapYear(year)) { monthDays[1] = 29; }


  // get the num of days for desired month(1-12) and name of month
  // adjust month for 0-based array indexes
  const daysInMonth = monthDays[month-1];
  const nameOfMonth = monthNames[month-1];

  // determine day for first day of month
  const firstDay = getDay(year, month, 1);

  // create calendar header
  output.push([getCenteredHeader(nameOfMonth, year)]);

  // add line for weekdays
  output.push([`Su Mo Tu We Th Fr Sa`]);


  // calculate leading spaces to start #s on correct day
  let leadingSpaces = _.fill(Array(firstDay), "   ");

  // get the day numbers for the selected month
  let monthDayNumbers = _.range(1,daysInMonth + 1);

  //create an array of lines to be chunked and pushed to ouput
  let monthCal = _.concat(leadingSpaces, monthDayNumbers);

  // ensure each item in array is a string with length === 3
  monthCal = _.map(monthCal, (str) => {
    str = str.toString();
    if (str.length === 1) { return str = ` ${str} `}
    else if (str.length === 2) {return `${str} `}
    else { return str }
  });



  // insert line breaks for each week
  monthCal = _.chunk(monthCal, 7);
  monthCal.map( (line) => { line[line.length-1] = _.trimEnd(line[line.length-1]) } );
  monthCal.forEach( (week) => {
    // week.push('\n');
    week = week.join('');
    output.push([week]);
    return week;
  });

  // adjust for newLines at end of month depending on # of weeks
  if (monthCal.length === 5) {
    output.push([""]);
  }
  else if (monthCal.length === 4) {
    output.push([""]);
  }

  // return the output
  return output;
}


// output calender to console
const printMonth = function(output) {
  output.forEach((line) => console.log(line.toString()));
}



module.exports = {
  isValidYear,
  isLeapYear,
  generateMonth,
  isValidMonth,
  printMonth
};
