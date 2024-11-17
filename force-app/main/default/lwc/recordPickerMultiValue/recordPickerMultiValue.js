import { LightningElement, wire } from 'lwc';
import { gql, graphql } from 'lightning/uiGraphQLApi';
// As of Winter '24, `lightning-record-picker` only supports a single selection.
// This sample component shows how you can turn `lightning-record-picker` into
// a multi-selection record picker.
// Converts a record to a lightning-pill element
// NOTE: Technically this is creating a LightningPill, but that component doesn't have "iconName" or "type"
const toContactPill = (record) => ({
    name: record.id,
    label: record.name,
    iconName: 'standard:contact',
    type: 'icon'
});
// Converts a list a IDs to lightning-record-picker filter
const toRecordPickerFilter = (ids) => ({
    criteria: [
        {
            fieldPath: 'Id',
            operator: 'nin', // "not in" operator
            value: ids
        }
    ]
});
// noinspection FunctionNamingConventionJS
export default class RecordPickerMultiValue extends LightningElement {
    /**
     * The id of the last record the user selected using the record picker.
     * Used to trigger graphql @wire calls.
     */
    selectedRecordId;
    /**
     * The list of selected records (id and name).
     * Used to compute and update the list of pill items
     * and to update the record picker filter
     * as we want to filter out already selected records from the record picker suggestions
     */
    selectedRecords = [];
    // NOTE: Had to add this as it's referenced below
    wireError;
    /**
     * Builds lightning-pill items from `selectedRecords`
     */
    get pillItems() {
        return this.selectedRecords.map(toContactPill);
    }
    /**
     * Builds lightning-record-picker filter from `selectedRecords`
     */
    get recordPickerFilter() {
        // Convert selectedRecords to a list of IDs
        const selectedRecordIds = this.selectedRecords.map((record) => record.id);
        return toRecordPickerFilter(selectedRecordIds);
    }
    // Variables for the GraphQL query
    get variables() {
        return this.selectedRecordId
            ? {
                selectedRecordId: this.selectedRecordId
            }
            : undefined;
    }
    // A GraphQL query is sent after the record picker change event has been dispatched
    // to get the name of the records that are selected in the record picker.
    @wire(graphql, {
        query: gql `
            query searchContacts($selectedRecordId: ID) {
                uiapi {
                    query {
                        Contact(
                            where: { Id: { eq: $selectedRecordId } }
                            first: 1
                        ) {
                            edges {
                                node {
                                    Id
                                    Name {
                                        value
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
        variables: '$variables'
    })
    wiredGraphQL({ data, errors }) {
        this.wireError = errors;
        if (errors || !data) {
            return;
        }
        const graphqlResults = data.uiapi.query.Contact.edges.map((edge) => ({
            id: edge.node.Id,
            name: edge.node.Name.value
        }));
        // Add to selectedRecords
        const selectedRecord = graphqlResults[0];
        this.selectedRecords = [...this.selectedRecords, selectedRecord];
        // We want the record picker input to be cleared
        // each time the user selects a record suggestion
        this._clearRecordPickerSelection();
    }
    _clearRecordPickerSelection() {
        this.refs.recordPicker.clearSelection();
        this.selectedRecordId = undefined;
    }
    handlePillRemove(event) {
        // @ts-expect-error Not sure where "item.name" is coming from here
        const recordId = event.detail.item.name;
        // Remove `recordId` from `selectedRecords`
        this.selectedRecords = this.selectedRecords.filter((record) => record.id !== recordId);
    }
    handleRecordPickerChange(event) {
        this.selectedRecordId = event.detail.recordId;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkUGlja2VyTXVsdGlWYWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlY29yZFBpY2tlck11bHRpVmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSXRELGdGQUFnRjtBQUNoRiw4RUFBOEU7QUFDOUUsbUNBQW1DO0FBRW5DLGdEQUFnRDtBQUNoRCwyR0FBMkc7QUFDM0csTUFBTSxhQUFhLEdBQUcsQ0FBQyxNQUErQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELElBQUksRUFBRSxNQUFNLENBQUMsRUFBRTtJQUNmLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSTtJQUNsQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLElBQUksRUFBRSxNQUFNO0NBQ2YsQ0FBQyxDQUFDO0FBRUgsMERBQTBEO0FBQzFELE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxHQUFhLEVBQUUsRUFBRSxDQUFDLENBQThCO0lBQzFFLFFBQVEsRUFBRTtRQUNOO1lBQ0ksU0FBUyxFQUFFLElBQUk7WUFDZixRQUFRLEVBQUUsS0FBSyxFQUFFLG9CQUFvQjtZQUNyQyxLQUFLLEVBQUUsR0FBRztTQUNiO0tBQ0o7Q0FDSCxDQUFBLENBQUM7QUFFSCwwQ0FBMEM7QUFDMUMsTUFBTSxDQUFDLE9BQU8sT0FBTyxzQkFBdUIsU0FBUSxnQkFBZ0I7SUFDaEU7OztPQUdHO0lBQ0gsZ0JBQWdCLENBQVM7SUFFekI7Ozs7O09BS0c7SUFDSCxlQUFlLEdBQVUsRUFBRSxDQUFDO0lBRTVCLGlEQUFpRDtJQUNqRCxTQUFTLENBQU07SUFFZjs7T0FFRztJQUNILElBQUksU0FBUztRQUNULE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxrQkFBa0I7UUFDbEIsMkNBQTJDO1FBQzNDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQzlDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUN4QixDQUFDO1FBQ0YsT0FBTyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxrQ0FBa0M7SUFDbEMsSUFBSSxTQUFTO1FBQ1QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCO1lBQ3hCLENBQUMsQ0FBQztnQkFDSSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2FBQzFDO1lBQ0gsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNwQixDQUFDO0lBRUQsbUZBQW1GO0lBQ25GLHlFQUF5RTtJQUN6RSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWCxLQUFLLEVBQUUsR0FBRyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQW9CVDtRQUNELFNBQVMsRUFBRSxZQUFZO0tBQzFCLENBQUM7SUFDRixZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLElBQUksTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEIsT0FBTztRQUNYLENBQUM7UUFFRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsQ0FBVTtZQUMvRSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1NBQzVCLENBQUEsQ0FBQyxDQUFDO1FBRUoseUJBQXlCO1FBQ3pCLE1BQU0sY0FBYyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRWpFLGdEQUFnRDtRQUNoRCxpREFBaUQ7UUFDakQsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELDJCQUEyQjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQTBDO1FBQ3ZELGtFQUFrRTtRQUNsRSxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFeEMsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQzlDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FDckMsQ0FBQztJQUNOLENBQUM7SUFFRCx3QkFBd0IsQ0FBQyxLQUF5QztRQUM5RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEQsQ0FBQztDQUNKIn0=