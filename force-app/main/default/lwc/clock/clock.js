import { LightningElement, api } from 'lwc';
export default class Clock extends LightningElement {
    timestamp = new Date();
    @api
    refresh() {
        this.timestamp = new Date();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRTVDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sS0FBTSxTQUFRLGdCQUFnQjtJQUMvQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUV2QixDQUFDLEdBQUc7SUFDSixPQUFPO1FBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7Q0FDSiJ9