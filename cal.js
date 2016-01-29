#!/usr/bin/env node --harmony_destructuring

// use ES6 strict mode
'use strict';

const Month = require('./lib/month');
const Year = require('./lib/year');


// get command line arguments
// const args = process.argv.slice(2);
const [,, ...args] = process.argv;


// console.log('args: ', args);


if (args.length === 0) {
  let today = new Date();

  // month is (0-11) converted to (1-12)
  let month = today.getMonth() + 1;

  // (1753-9999)
  let year = today.getFullYear();

  // day is (1-31);
  let day = today.getDate();

  Month.generateMonth(year, month);
}
else if (args.length === 2) {
  const [month, year] = args;

  let output = Month.generateMonth(parseInt(month), parseInt(year));
  console.log(output);
  Month.printMonth(output);
}
else if (args.length === 1) {
  const[year] = args;

  Year.generateYear(parseInt(year));
}
else {
  console.log('invalid args.length');
  // set error code for CLI app
  // process.exit(64);
}
