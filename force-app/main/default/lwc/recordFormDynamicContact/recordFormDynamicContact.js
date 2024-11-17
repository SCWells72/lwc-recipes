import { LightningElement, api } from 'lwc';
export default class RecordFormDynamicContact extends LightningElement {
    // Flexipage provides recordId and objectApiName
    @api
    recordId;
    @api
    objectApiName;
    fields = ['AccountId', 'Name', 'Title', 'Phone', 'Email'];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkRm9ybUR5bmFtaWNDb250YWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVjb3JkRm9ybUR5bmFtaWNDb250YWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFFNUMsTUFBTSxDQUFDLE9BQU8sT0FBTyx3QkFBeUIsU0FBUSxnQkFBZ0I7SUFDbEUsZ0RBQWdEO0lBQ2hELENBQUMsR0FBRztJQUFDLFFBQVEsQ0FBUztJQUN0QixDQUFDLEdBQUc7SUFBQyxhQUFhLENBQVM7SUFDM0IsTUFBTSxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0NBQzdEIn0=