import { LightningElement } from 'lwc';
import Clock from 'c/clock';

export default class ApiMethod extends LightningElement {
    handleRefresh() {
        (this.template.querySelector<Clock>('c-clock')).refresh();
    }
}
