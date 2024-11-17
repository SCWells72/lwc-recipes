import { LightningElement, api } from 'lwc';
export default class ChartBar extends LightningElement {
    @api
    percentage;
    // @ts-expect-error Overrides a base property; should probably rename it
    get style() {
        return `width: ${this.percentage}%`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnRCYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGFydEJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRTVDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sUUFBUyxTQUFRLGdCQUFnQjtJQUNsRCxDQUFDLEdBQUc7SUFBQyxVQUFVLENBQVM7SUFFeEIsd0VBQXdFO0lBQ3hFLElBQUksS0FBSztRQUNMLE9BQU8sVUFBVSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUM7SUFDeEMsQ0FBQztDQUNKIn0=