// use ES6 strict mode
'use strict';

const Month = require('./month');
const Year = require('./year');


// get command line arguments
// const args = process.argv.slice(2);
const [,, ...args] = process.argv;


// generate current month ($ cal.js )
if (args.length === 0) {
  let today = new Date();

  // month is (0-11) converted to (1-12)
  let month = today.getMonth() + 1;

  // (1753-9999)
  let year = today.getFullYear();

  // day is (1-31);
  let day = today.getDate();

  let output = Month.generateMonth(month,year);
  Month.printMonth(output);
}


// generate a single month ($ cal.js <month> <year>)
else if (args.length === 2) {
  // get CLI arguments
  const [month, year] = args;
  let output = Month.generateMonth(parseInt(month), parseInt(year));
  Month.printMonth(output);
}


// generate a single year ($ cal.js <year>)
else if (args.length === 1) {
  const[year] = args;
  let output = Year.generateYear(parseInt(year));
  Year.printYear(output);
}
else {
  console.log('invalid args.length');
  // set error code for CLI app
  // process.exit(64);
}
