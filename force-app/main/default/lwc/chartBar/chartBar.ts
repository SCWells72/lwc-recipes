import { LightningElement, api } from 'lwc';

export default class ChartBar extends LightningElement {
    @api percentage: number;

    // NOTE: Renamed this because it conflicts with inherited property "style"
    get barStyle() {
        return `width: ${this.percentage}%`;
    }
}
