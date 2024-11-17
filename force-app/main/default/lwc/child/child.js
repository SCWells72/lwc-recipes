import { LightningElement, api } from 'lwc';
export default class Child extends LightningElement {
    @api
    firstName;
    @api
    lastName;
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGlsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRTVDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sS0FBTSxTQUFRLGdCQUFnQjtJQUMvQyxDQUFDLEdBQUc7SUFBQyxTQUFTLENBQVM7SUFDdkIsQ0FBQyxHQUFHO0lBQUMsUUFBUSxDQUFTO0lBRXRCLElBQUksUUFBUTtRQUNSLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0NBQ0oifQ==