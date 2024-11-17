import { LightningElement, api } from 'lwc';

export default class Child extends LightningElement {
    @api firstName: string;
    @api lastName: string;

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
