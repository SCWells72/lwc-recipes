import { LightningElement, api } from 'lwc';

export default class ChartBar extends LightningElement {
    @api percentage: number;

    // @ts-expect-error Overrides a base property; should probably rename it
    get style() {
        return `width: ${this.percentage}%`;
    }
}
