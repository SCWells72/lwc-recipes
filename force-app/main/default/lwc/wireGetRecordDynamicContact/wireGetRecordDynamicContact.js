import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
const fields = [
    'Contact.Name',
    'Contact.Title',
    'Contact.Phone',
    'Contact.Email'
];
export default class WireGetRecordDynamicContact extends LightningElement {
    @api
    recordId;
    @wire(getRecord, { recordId: '$recordId', fields })
    contact;
    get name() {
        return this.contact.data.fields.Name.value;
    }
    // @ts-expect-error Overrides a base property; should probably rename it
    get title() {
        return this.contact.data.fields.Title.value;
    }
    get phone() {
        return this.contact.data.fields.Phone.value;
    }
    get email() {
        return this.contact.data.fields.Email.value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lyZUdldFJlY29yZER5bmFtaWNDb250YWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2lyZUdldFJlY29yZER5bmFtaWNDb250YWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQXdCLE1BQU0sdUJBQXVCLENBQUM7QUFFeEUsTUFBTSxNQUFNLEdBQUc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0NBQ2xCLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxPQUFPLDJCQUE0QixTQUFRLGdCQUFnQjtJQUNyRSxDQUFDLEdBQUc7SUFBQyxRQUFRLENBQVM7SUFFdEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUNuRCxPQUFPLENBQW1DO0lBRTFDLElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDL0MsQ0FBQztJQUVELHdFQUF3RTtJQUN4RSxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ2hELENBQUM7Q0FDSiJ9