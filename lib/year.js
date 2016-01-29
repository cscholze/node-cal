'use strict';

const _ = require('../node_modules/lodash/lodash');
const { generateMonth } = require('./month');


// output the top line of the annual calendar output
const createYearHeader = function(year) {
  console.log(`                             ${year}\n`);
};

// generate year calendar for a given year input
const generateYear = function(year) {
  // create yer header output
  createYearHeader(year);

  const months = _.range(1,13).map( num => generateMonth(num, year) );


  // remove month header
  console.log
};



module.exports = {
  generateYear,
}
