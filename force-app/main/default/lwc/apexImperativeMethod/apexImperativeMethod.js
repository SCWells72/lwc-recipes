import { LightningElement } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
export default class ApexImperativeMethod extends LightningElement {
    contacts;
    error;
    async handleLoad() {
        try {
            this.contacts = await getContactList();
            this.error = undefined;
        }
        catch (error) {
            this.contacts = undefined;
            this.error = error;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBleEltcGVyYXRpdmVNZXRob2QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcGV4SW1wZXJhdGl2ZU1ldGhvZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDdkMsT0FBTyxjQUFjLE1BQU0sbURBQW1ELENBQUM7QUFFL0UsTUFBTSxDQUFDLE9BQU8sT0FBTyxvQkFBcUIsU0FBUSxnQkFBZ0I7SUFDOUQsUUFBUSxDQUFZO0lBQ3BCLEtBQUssQ0FBTTtJQUVYLEtBQUssQ0FBQyxVQUFVO1FBQ1osSUFBSSxDQUFDO1lBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLGNBQWMsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQzNCLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7WUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQztJQUNMLENBQUM7Q0FDSiJ9