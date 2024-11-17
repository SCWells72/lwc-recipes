import { LightningElement, api } from 'lwc';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
export default class RecordViewFormStaticContact extends LightningElement {
    // Exposing fields to make them available in the template
    accountField = ACCOUNT_FIELD;
    nameField = NAME_FIELD;
    titleField = TITLE_FIELD;
    phoneField = PHONE_FIELD;
    emailField = EMAIL_FIELD;
    // Flexipage provides recordId and objectApiName
    @api
    recordId;
    @api
    objectApiName;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkVmlld0Zvcm1TdGF0aWNDb250YWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVjb3JkVmlld0Zvcm1TdGF0aWNDb250YWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFFNUMsT0FBTyxhQUFhLE1BQU0sc0NBQXNDLENBQUM7QUFDakUsT0FBTyxVQUFVLE1BQU0saUNBQWlDLENBQUM7QUFDekQsT0FBTyxXQUFXLE1BQU0sa0NBQWtDLENBQUM7QUFDM0QsT0FBTyxXQUFXLE1BQU0sa0NBQWtDLENBQUM7QUFDM0QsT0FBTyxXQUFXLE1BQU0sa0NBQWtDLENBQUM7QUFFM0QsTUFBTSxDQUFDLE9BQU8sT0FBTywyQkFBNEIsU0FBUSxnQkFBZ0I7SUFDckUseURBQXlEO0lBQ3pELFlBQVksR0FBRyxhQUFhLENBQUM7SUFDN0IsU0FBUyxHQUFHLFVBQVUsQ0FBQztJQUN2QixVQUFVLEdBQUcsV0FBVyxDQUFDO0lBQ3pCLFVBQVUsR0FBRyxXQUFXLENBQUM7SUFDekIsVUFBVSxHQUFHLFdBQVcsQ0FBQztJQUV6QixnREFBZ0Q7SUFDaEQsQ0FBQyxHQUFHO0lBQUMsUUFBUSxDQUFTO0lBQ3RCLENBQUMsR0FBRztJQUFDLGFBQWEsQ0FBUztDQUM5QiJ9