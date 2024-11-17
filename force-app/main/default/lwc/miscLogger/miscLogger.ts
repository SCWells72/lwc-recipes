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
