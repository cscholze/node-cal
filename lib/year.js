const isValidYear = function (year) {
  if (typeof year !== 'number') {
    return false;
  }
  else if (year%1 !== 0) {
    return false;
  }
  else if (year < 1753 || year > 9999) {
    return false
  }
  else {
    return true;
  }
}

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

const generateYear = function(year) {
  console.log('generating a year calendar...');
}


module.exports = {
  "generateYear": generateYear,
  "isValidYear": isValidYear,
  "isLeapYear": isLeapYear
}
