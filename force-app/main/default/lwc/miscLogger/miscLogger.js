import { LightningElement } from 'lwc';
import { log } from 'lightning/logger';
// noinspection JSMethodCanBeStatic
export default class MiscLogger extends LightningElement {
    logMessageEventMonitoring() {
        const msg = {
            type: 'click',
            action: 'Log'
        };
        log(msg);
    }
    logMessageConsole() {
        console.log('This message is logged to the console');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY0xvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1pc2NMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV2QyxtQ0FBbUM7QUFDbkMsTUFBTSxDQUFDLE9BQU8sT0FBTyxVQUFXLFNBQVEsZ0JBQWdCO0lBQ3BELHlCQUF5QjtRQUNyQixNQUFNLEdBQUcsR0FBRztZQUNSLElBQUksRUFBRSxPQUFPO1lBQ2IsTUFBTSxFQUFFLEtBQUs7U0FDaEIsQ0FBQztRQUNGLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDRCxpQkFBaUI7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7SUFDekQsQ0FBQztDQUNKIn0=