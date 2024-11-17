// noinspection LocalVariableNamingConventionJS

import { getTermOptions, calculateMonthlyPayment } from 'c/mortgage';

describe('c-mortgage', () => {
    describe('calculateMonthlyPayment function', () => {
        it('returns monthly payment with valid inputs', () => {
            const PRINCIPLE = 50000;
            const YEARS = 20;
            const RATE = 3;

            // Get a two decimal place string representation of long decimal
            const expectedResult = (277.298798926959).toFixed(2);

            const monthlyPayment = calculateMonthlyPayment(
                PRINCIPLE,
                YEARS,
                RATE
            );
            // convert long decimal to two decimal places and compare
            expect(monthlyPayment.toFixed(2)).toBe(expectedResult);
        });

        it('returns zero with invalid inputs', () => {
            // each value tests each param as falsy, third param also tested for explicit zero value
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            const INVALID_INPUTS = require('./data/invalidInputsTestData.json');

            // invoke with 4 invalid input sets and store each return value in an array
            const results = INVALID_INPUTS.inputs.map((item: { principal: number; years: number; rate: number; }) =>
                calculateMonthlyPayment(item.principal, item.years, item.rate)
            );

            expect(results).toMatchObject(INVALID_INPUTS.expectedResults);
        });
    });

    it('getTermOptions returns valid term options', () => {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const termOptions = require('./data/termOptions.json');

        expect(getTermOptions()).toMatchObject(termOptions);
    });
});
