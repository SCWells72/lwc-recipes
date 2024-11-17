const getTermOptions = () => {
    return [
        { label: '20 years', value: 20 },
        { label: '25 years', value: 25 },
        { label: '30 years', value: 30 },
        { label: '35 years', value: 35 },
        { label: '40 years', value: 40 }
    ];
};
const calculateMonthlyPayment = (principal, years, rate) => {
    // noinspection OverlyComplexBooleanExpressionJS
    if (principal && years && rate && rate > 0) {
        const monthlyRate = rate / 100 / 12;
        // noinspection UnnecessaryLocalVariableJS
        const monthlyPayment = (principal * monthlyRate) /
            (1 - Math.pow(1 / (1 + monthlyRate), years * 12));
        return monthlyPayment;
    }
    return 0;
};
export { getTermOptions, calculateMonthlyPayment };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ydGdhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb3J0Z2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLGNBQWMsR0FBRyxHQUE0QixFQUFFO0lBQ2pELE9BQU87UUFDSCxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUNoQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUNoQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUNoQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUNoQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtLQUNuQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRUYsTUFBTSx1QkFBdUIsR0FBRyxDQUFDLFNBQWlCLEVBQUUsS0FBYSxFQUFFLElBQVksRUFBRSxFQUFFO0lBQy9FLGdEQUFnRDtJQUNoRCxJQUFJLFNBQVMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUN6QyxNQUFNLFdBQVcsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNwQywwQ0FBMEM7UUFDMUMsTUFBTSxjQUFjLEdBQ2hCLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztZQUN6QixDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RCxPQUFPLGNBQWMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRixPQUFPLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFFLENBQUMifQ==