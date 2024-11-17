import { LightningElement } from 'lwc';
import LightningInput from 'lightning/input';

export default class HelloBinding extends LightningElement {
    greeting = 'World';

    handleChange(event: CustomEvent<LightningInput>) {
        this.greeting = (<LightningInput>event.target).value;
    }
}
