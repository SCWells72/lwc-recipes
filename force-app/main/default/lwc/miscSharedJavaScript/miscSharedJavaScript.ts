import { LightningElement } from 'lwc';
import { getTermOptions, calculateMonthlyPayment } from 'c/mortgage';
import LightningInput from 'lightning/input';
import LightningCombobox from 'lightning/combobox';

export default class MiscSharedJavaScript extends LightningElement {
    principal = 200000;
    term = 30;
    rate = 4;
    monthlyPayment: number;

    termOptions = getTermOptions();

    principalChange(event: CustomEvent<LightningInput>) {
        this.principal = (<LightningInput>event.target).value;
    }

    termChange(event: CustomEvent<LightningCombobox>) {
        this.term = parseInt((<LightningInput>event.target).value, 10);
    }

    rateChange(event: CustomEvent<LightningInput>) {
        this.rate = (<LightningInput>event.target).value;
    }

    calculateMonthlyPayment() {
        this.monthlyPayment = calculateMonthlyPayment(
            this.principal,
            this.term,
            this.rate
        );
    }
}
