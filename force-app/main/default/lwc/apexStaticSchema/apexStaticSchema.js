import { LightningElement, wire } from 'lwc';
import { getSObjectValue } from '@salesforce/apex';
import getSingleContact from '@salesforce/apex/ContactController.getSingleContact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
export default class ApexStaticSchema extends LightningElement {
    @wire(getSingleContact)
    contact;
    get name() {
        return this.contact.data
            ? getSObjectValue(this.contact.data, NAME_FIELD)
            : '';
    }
    get title() {
        return this.contact.data
            ? getSObjectValue(this.contact.data, TITLE_FIELD)
            : '';
    }
    get email() {
        return this.contact.data
            ? getSObjectValue(this.contact.data, EMAIL_FIELD)
            : '';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBleFN0YXRpY1NjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwZXhTdGF0aWNTY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxnQkFBZ0IsTUFBTSxxREFBcUQsQ0FBQztBQUVuRixPQUFPLFVBQVUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6RCxPQUFPLFdBQVcsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRCxPQUFPLFdBQVcsTUFBTSxrQ0FBa0MsQ0FBQztBQUUzRCxNQUFNLENBQUMsT0FBTyxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtJQUMxRCxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUFDLE9BQU8sQ0FBc0I7SUFFckQsSUFBSSxJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7WUFDcEIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUM7WUFDaEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUNwQixDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQztZQUNqRCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQ3BCLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0NBQ0oifQ==