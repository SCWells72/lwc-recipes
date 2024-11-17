import { LightningElement } from 'lwc';
import { getTermOptions, calculateMonthlyPayment } from 'c/mortgage';
export default class MiscSharedJavaScript extends LightningElement {
    principal = 200000;
    term = 30;
    rate = 4;
    monthlyPayment;
    termOptions = getTermOptions();
    principalChange(event) {
        this.principal = event.target.value;
    }
    termChange(event) {
        this.term = parseInt(event.target.value, 10);
    }
    rateChange(event) {
        this.rate = event.target.value;
    }
    calculateMonthlyPayment() {
        this.monthlyPayment = calculateMonthlyPayment(this.principal, this.term, this.rate);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY1NoYXJlZEphdmFTY3JpcHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtaXNjU2hhcmVkSmF2YVNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDdkMsT0FBTyxFQUFFLGNBQWMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUlyRSxNQUFNLENBQUMsT0FBTyxPQUFPLG9CQUFxQixTQUFRLGdCQUFnQjtJQUM5RCxTQUFTLEdBQUcsTUFBTSxDQUFDO0lBQ25CLElBQUksR0FBRyxFQUFFLENBQUM7SUFDVixJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ1QsY0FBYyxDQUFTO0lBRXZCLFdBQVcsR0FBRyxjQUFjLEVBQUUsQ0FBQztJQUUvQixlQUFlLENBQUMsS0FBa0M7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBb0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7SUFDMUQsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFxQztRQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBa0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFrQztRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFvQixLQUFLLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztJQUNyRCxDQUFDO0lBRUQsdUJBQXVCO1FBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsdUJBQXVCLENBQ3pDLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsSUFBSSxDQUNaLENBQUM7SUFDTixDQUFDO0NBQ0oifQ==