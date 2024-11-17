import { LightningElement } from 'lwc';
import LightningInput from 'lightning/input';

export default class HelloConditionalRendering extends LightningElement {
    areDetailsVisible = false;

    handleChange(event: CustomEvent<LightningInput>) {
        this.areDetailsVisible = (<LightningInput>event.target).checked;
    }
}
