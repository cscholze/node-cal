'use strict';

const modifiedMonth = function(month) {
  if (month < 1 || month > 12) {
    return -1;
  }
  else if (month === 1) {
    return 13;
  }
  else if (month === 2) {
    return 14;
  }
  else {
    return (month === 1 || month === 2) ? month + 12 : month;
  }
};

const modifiedYear = function(year, month) {
  return (month === 1 || month === 2) ? year-1 : year;
};

const getDay = function(year, month, day) {
  let q = day;
  let m = modifiedMonth(month);
  let y = modifiedYear(year, month);

  let h = (q + Math.floor((m+1)*26/10)
           + y
           + Math.floor(y/4)
           + 6*Math.floor(y/100)
           + Math.floor(y/400))%7;

  return ((h+6)%7);
}

module.exports = {
  "getDay": getDay,
  "modifiedMonth": modifiedMonth,
  "modifiedYear": modifiedYear
}
