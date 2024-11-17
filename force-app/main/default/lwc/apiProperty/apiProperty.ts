import { LightningElement } from 'lwc';
import LightningInput from 'lightning/input';

export default class ApiProperty extends LightningElement {
    percentage = 50;

    handlePercentageChange(event: CustomEvent<LightningInput>) {
        this.percentage = (<LightningInput>event.target).value;
    }
}
