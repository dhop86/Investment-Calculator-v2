"use strict";

class Investment {
    constructor(initialAmount, years, monthlyContrib, interestRate) {
        this.initialAmount = initialAmount;
        this.years = years;
        this.monthlyContrib = monthlyContrib;
        this.interestRate = interestRate;
        this.calculator = function() {
            const monthsPerYear = 12;
            let totalInterestEarned = 0;
            let priciple = this.initialAmount;
            let futureAmount = this.initialAmount;
            for (let i = 0; i < years;){
                for (let j = 0; j < monthsPerYear;){
                    totalInterestEarned += priciple * (interestRate / monthsPerYear);
                    priciple += this.monthlyContrib;
                    j++;
                };
                futureAmount = (priciple + totalInterestEarned);
                addRow((i + 1), futureAmount, priciple, totalInterestEarned);
                i++;
            };
            return [futureAmount, priciple, totalInterestEarned];
        };
    };
};

if (window.addEventListener) {
    window.addEventListener('load', init, false);
    window.addEventListener('load', startingFocus, false);
} else {
    window.attachEvent('onload', init);
    window.attachEvent('onload', startingFocus);
};