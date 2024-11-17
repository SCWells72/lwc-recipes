import { LightningElement, wire } from 'lwc';
import getSingleContact from '@salesforce/apex/ContactController.getSingleContact';
export default class ApexStaticSchema extends LightningElement {
    @wire(getSingleContact)
    contact;
    get name() {
        return this.contact.data
            ? this.contact.data.Name
            : '';
    }
    get title() {
        return this.contact.data
            ? this.contact.data.Title
            : '';
    }
    get email() {
        return this.contact.data
            ? this.contact.data.Email
            : '';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBleFN0YXRpY1NjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwZXhTdGF0aWNTY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLGdCQUFnQixNQUFNLHFEQUFxRCxDQUFDO0FBRW5GLE1BQU0sQ0FBQyxPQUFPLE9BQU8sZ0JBQWlCLFNBQVEsZ0JBQWdCO0lBQzFELENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQUMsT0FBTyxDQUFzQjtJQUVyRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUN4QixDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQ3BCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3pCLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsSUFBSSxLQUFLO1FBQ0wsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7WUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDekIsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7Q0FDSiJ9