import { LightningElement } from 'lwc';
import LightningInput from 'lightning/input';

export default class HelloExpressions extends LightningElement {
    firstName = '';
    lastName = '';

    handleChange(event: CustomEvent<LightningInput>) {
        const field = (<LightningInput>event.target).name;
        if (field === 'firstName') {
            this.firstName = (<LightningInput>event.target).value;
        } else if (field === 'lastName') {
            this.lastName = (<LightningInput>event.target).value;
        }
    }

    get uppercasedFullName() {
        return `${this.firstName} ${this.lastName}`.trim().toUpperCase();
    }
}
