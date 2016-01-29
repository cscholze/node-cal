'use strict';

const { expect } = require('chai');
const { execSync } = require('child_process');

describe('cal', () => {
  describe('CLI', () => {
    xit('should handle the current month', () => {
      const goal = execSync('cal').toString();
      const output = execSync('./cal.js').toString();

      expect(output).to.equal(goal);
    });

    xit('should handle arguments [month, year]', () => {
      const goal = execSync('cal 2 2016').toString();
      const output = execSync('./cal.js 2 2016').toString();

      expect(output).to.equal(goal);
    });

    xit('should handle argument for a year', () => {
      const goal = execSync('cal 2016').toString();
      const output = execSync('./cal.js 2016').toString();

      expect(output).to.equal(goal);
    });
  });
  // tests for zeller.js module
  describe("Zeller's congruence", () => {
    const zellers = require('../lib/zellers.js');


    describe('.modifiedMonth', () => {
      it('is a function of zellers', () => {
        zellers.modifiedMonth();
        expect(zellers.modifiedMonth).to.be.a('function');
      });

      // (month > 12) === -1
      it('returns -1 for months > 12', () => {
        expect(zellers.modifiedMonth(13)).to.equal(-1);
      });

      // (month < 1) === -1
      it('returns -1 for month < 1', () => {
        expect(zellers.modifiedMonth(0)).to.equal(-1);
      });

      // 1 === 13
      it('returns 13 for January', () => {
        expect(zellers.modifiedMonth(1)).to.equal(13);
      });

      // 2 === 14
      it('returns 14 for February', () => {
        expect(zellers.modifiedMonth(2)).to.equal(14);
      });

      // 3 === 3
      it('returns 3 for March', () => {
        expect(zellers.modifiedMonth(3)).to.equal(3);
      });
    });

    describe('.modifiedYear', () => {
      it('is a function of zellers', () => {
        expect(zellers.modifiedYear).to.be.a('function');
      });

      // 2015, 1 === 2014
      it('returns 2015 for Jan 2014', () => {
        expect(zellers.modifiedYear(2015, 1)).to.equal(2014);
      });

      // 2016, 2 === 2015
      it('returns 2015 for Feb 2016', () => {
        expect(zellers.modifiedYear(2016, 2)).to.equal(2015);
      });

      // 2017, 3 === 2017
      it('returns 2017 for Mar 2017', () => {
        expect(zellers.modifiedYear(2017, 3)).to.equal(2017);
      });
    });

    describe('.getDay', () => {
      it('is a function of zellers', () => {
        expect(zellers.getDay).to.be.a('function');
      });

      // 2016, 3, 1 === 2
      it('returns 2 (Tuesday) for March 1, 2016', () => {
        expect(zellers.getDay(2016, 3, 1)).to.equal(2);
      });

      // 2000, 3, 1 === 3
      it('returns 3 (Wednesday) for March 1, 2000', () => {
        expect(zellers.getDay(2000, 3, 1)).to.equal(3);
      });

      // 2100, 3, 1 === 1
      it('returns 1 (Monday) for March 1, 2100', () => {
        expect(zellers.getDay(2100, 3, 1)).to.equal(1);
      });

      // 2200, 3, 2 === 0
      it('returns 0 (Sunday) for March 2, 2200', () => {
        expect(zellers.getDay(2200, 3, 2)).to.equal(0);
      });

      // 2300, 3, 1 === 4
      it('returns 4 (Thursday) for March 1, 2300', () => {
        expect(zellers.getDay(2300, 3, 1)).to.equal(4);
      });

      // 2015, 12, 1 === 2
      it('returns 2 (Tuesday) for December 1, 2015', () => {
        expect(zellers.getDay(2015, 12, 1)).to.equal(2);
      });

      // 2016, 1, 1 === 5
      it('returns 5 (Friday) for January 1, 2016', () => {
        expect(zellers.getDay(2016, 1, 1)).to.equal(5);
      });

      // 2016, 2, 1 === 1
      it('returns 1 (Monday) for January 1, 2016', () => {
        expect(zellers.getDay(2016, 2, 1)).to.equal(1);
      });

      // 2016, 3, 1 === 1
      it('returns 2(Tuesday) for March 1, 2016', () => {
        expect(zellers.getDay(2016, 3, 1)).to.equal(2);
      });

    });
  });

  // Tests for month.js module
  describe('month.js module', () => {
    const month = require('../lib/month.js');

    describe('generateMonth', () => {
      it('is a function of month.js', () => {
        expect(month.generateMonth).to.be.a('function');
      });
    });

    describe('isValidMonth', () => {
      it('is a function of month.js', () => {
        expect(month.isValidMonth).to.be.a('function');
      });

      it('returns false if month < 1 || month > 12', () => {
        expect(month.isValidMonth(0)).to.be.false;
        expect(month.isValidMonth(13)).to.be.false;
       });

      it('returns false if month is not a number', () => {
        expect(month.isValidMonth('a')).to.be.false;
      });

      it('returns false if month is no an integer', () => {
        expect(month.isValidMonth(10.54)).to.be.false;
      });

      it('returns true if month is an integer && 0 < month < 13', () => {
        expect(month.isValidMonth(1)).to.be.true;
        expect(month.isValidMonth(12)).to.be.true;
      });

    });

    describe('isleapYear', () => {
      it('is a function of year.js', () => {
        expect(month.isLeapYear).to.be.a('function');
      });

      it('isLeapYear(2400) returns true', () => {
        expect(month.isLeapYear(2400)).to.be.true;
      });
      it('isLeapYear(2016) returns true', () => {
        expect(month.isLeapYear(2400)).to.be.true;
      });
      it('isLeapYear(2000) returns true', () => {
        expect(month.isLeapYear(2400)).to.be.true;
      });
      it('isLeapYear(2500) returns false', () => {
        expect(month.isLeapYear(2500)).to.be.false;
      });
      it('isLeapYear(1995) returns false', () => {
        expect(month.isLeapYear(1995)).to.be.false;
      });
    });

    describe('isValidYear', () => {
      it('is a function of month.js', () => {
        expect(month.isValidYear).to.be.a('function');
      });

      it('returns false if year < 1753', () => {
        expect(month.isValidYear(1752)).to.be.false;
      });

      it('returns false if year > 9999', () => {
        expect(month.isValidYear(10000)).to.be.false;
      });

      it('returns false if year is not a number', () => {
        expect(month.isValidYear('a')).to.be.false;
      });

      it('returns false if year is not an integer', () => {
        expect(month.isValidYear(1.321)).to.be.false;
      });

      it('returns true if year is > 1752', () => {
        expect(month.isValidYear(1753)).to.be.true;
      });

      it('returns true if year is < 10000', () => {
        expect(month.isValidYear(9999)).to.be.true;
      });
    });


  });

  describe('year.js module', () => {
    const year = require('../lib/year.js');

    describe('generateYear', () => {
      it('is a function of year.js', () => {
        expect(year.generateYear).to.be.a('function');
      });
    });



  });

});
