// noinspection JSDeprecatedSymbols
import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
export default class WireListView extends LightningElement {
    // Update listViewApiName to be a Contact list view dev name on your org if not using the recipe org
    @wire(getListUi, {
        objectApiName: CONTACT_OBJECT,
        listViewApiName: 'All_Recipes_Contacts',
        sortBy: NAME_FIELD,
        pageSize: 10
    })
    listView;
    get contacts() {
        return this.listView.data.records.records;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lyZUxpc3RWaWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2lyZUxpc3RWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFtQztBQUVuQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RCxPQUFPLGNBQWMsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RCxPQUFPLFVBQVUsTUFBTSxpQ0FBaUMsQ0FBQztBQUV6RCxNQUFNLENBQUMsT0FBTyxPQUFPLFlBQWEsU0FBUSxnQkFBZ0I7SUFDdEQsb0dBQW9HO0lBQ3BHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNiLGFBQWEsRUFBRSxjQUFjO1FBQzdCLGVBQWUsRUFBRSxzQkFBc0I7UUFDdkMsTUFBTSxFQUFFLFVBQVU7UUFDbEIsUUFBUSxFQUFFLEVBQUU7S0FDZixDQUFDO0lBQ0YsUUFBUSxDQUFxQjtJQUU3QixJQUFJLFFBQVE7UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDOUMsQ0FBQztDQUNKIn0=