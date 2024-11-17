import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContactList';
const COLS = [
    { label: 'First Name', fieldName: 'FirstName' },
    { label: 'Last Name', fieldName: 'LastName' },
    { label: 'Title', fieldName: 'Title' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    {
        label: 'Contact Picture',
        type: 'customPictureType',
        typeAttributes: {
            // @ts-expect-error "pictureUrl" doesn't exist on TypeAttributes
            pictureUrl: { fieldName: 'Picture__c' }
        },
        cellAttributes: { alignment: 'center' }
    }
];
export default class DatatableCustomDataType extends LightningElement {
    columns = COLS;
    @wire(getContacts)
    contacts;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXRhYmxlQ3VzdG9tRGF0YVR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhdGFibGVDdXN0b21EYXRhVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQzdDLE9BQU8sV0FBVyxNQUFNLG1EQUFtRCxDQUFDO0FBRzVFLE1BQU0sSUFBSSxHQUFzQjtJQUM1QixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRTtJQUMvQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRTtJQUM3QyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRTtJQUN0QyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ3JELEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7SUFDckQ7UUFDSSxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLElBQUksRUFBRSxtQkFBbUI7UUFDekIsY0FBYyxFQUFFO1lBQ1osZ0VBQWdFO1lBQ2hFLFVBQVUsRUFBRSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUU7U0FDMUM7UUFDRCxjQUFjLEVBQUUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFO0tBQzFDO0NBQ0osQ0FBQztBQUNGLE1BQU0sQ0FBQyxPQUFPLE9BQU8sdUJBQXdCLFNBQVEsZ0JBQWdCO0lBQ2pFLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFFZixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDbEIsUUFBUSxDQUF3QjtDQUNuQyJ9