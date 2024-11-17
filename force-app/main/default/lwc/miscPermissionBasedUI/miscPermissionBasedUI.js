import { LightningElement } from 'lwc';
// import the permission from userPermission (standard Salesforce permissions) or
// customPermission (custom org-defined permissions)
import hasAccessRestrictedUI from '@salesforce/customPermission/accessRestrictedUIPermission';
// noinspection JSMethodCanBeStatic
export default class MiscPermissionBasedUI extends LightningElement {
    // surface imported permission to HTML template with getter
    get isRestrictedUIAccessible() {
        return hasAccessRestrictedUI;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY1Blcm1pc3Npb25CYXNlZFVJLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWlzY1Blcm1pc3Npb25CYXNlZFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUV2QyxpRkFBaUY7QUFDakYsb0RBQW9EO0FBQ3BELE9BQU8scUJBQXFCLE1BQU0sMkRBQTJELENBQUM7QUFFOUYsbUNBQW1DO0FBQ25DLE1BQU0sQ0FBQyxPQUFPLE9BQU8scUJBQXNCLFNBQVEsZ0JBQWdCO0lBQy9ELDJEQUEyRDtJQUMzRCxJQUFJLHdCQUF3QjtRQUN4QixPQUFPLHFCQUFxQixDQUFDO0lBQ2pDLENBQUM7Q0FDSiJ9