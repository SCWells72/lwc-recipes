import { LightningElement, api } from 'lwc';

export default class CompositionWithAppBuilder extends LightningElement {
    @api picklistValue: string;
    @api stringValue: string;
    @api numberValue: number;
}
