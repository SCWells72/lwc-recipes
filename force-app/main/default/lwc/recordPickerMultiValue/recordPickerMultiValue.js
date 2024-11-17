import { LightningElement, wire } from 'lwc';
import { gql, graphql } from 'lightning/uiGraphQLApi';
// As of Winter '24, `lightning-record-picker` only supports a single selection.
// This sample component shows how you can turn `lightning-record-picker` into
// a multi-selection record picker.
// Converts a record to a lightning-pill element
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkUGlja2VyTXVsdGlWYWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlY29yZFBpY2tlck11bHRpVmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSXRELGdGQUFnRjtBQUNoRiw4RUFBOEU7QUFDOUUsbUNBQW1DO0FBRW5DLGdEQUFnRDtBQUNoRCxNQUFNLGFBQWEsR0FBRyxDQUFDLE1BQStCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEQsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFO0lBQ2YsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJO0lBQ2xCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsSUFBSSxFQUFFLE1BQU07Q0FDZixDQUFDLENBQUM7QUFFSCwwREFBMEQ7QUFDMUQsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLEdBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3QyxRQUFRLEVBQUU7UUFDTjtZQUNJLFNBQVMsRUFBRSxJQUFJO1lBQ2YsUUFBUSxFQUFFLEtBQUssRUFBRSxvQkFBb0I7WUFDckMsS0FBSyxFQUFFLEdBQUc7U0FDYjtLQUNKO0NBQ0osQ0FBQyxDQUFDO0FBRUgsMENBQTBDO0FBQzFDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sc0JBQXVCLFNBQVEsZ0JBQWdCO0lBQ2hFOzs7T0FHRztJQUNILGdCQUFnQixDQUFTO0lBRXpCOzs7OztPQUtHO0lBQ0gsZUFBZSxHQUFVLEVBQUUsQ0FBQztJQUU1QixpREFBaUQ7SUFDakQsU0FBUyxDQUFNO0lBRWY7O09BRUc7SUFDSCxJQUFJLFNBQVM7UUFDVCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksa0JBQWtCO1FBQ2xCLDJDQUEyQztRQUMzQyxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUM5QyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsa0NBQWtDO0lBQ2xDLElBQUksU0FBUztRQUNULE9BQU8sSUFBSSxDQUFDLGdCQUFnQjtZQUN4QixDQUFDLENBQUM7Z0JBQ0ksZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjthQUMxQztZQUNILENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDcEIsQ0FBQztJQUVELG1GQUFtRjtJQUNuRix5RUFBeUU7SUFDekUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ1gsS0FBSyxFQUFFLEdBQUcsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FvQlQ7UUFDRCxTQUFTLEVBQUUsWUFBWTtLQUMxQixDQUFDO0lBQ0YsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QixJQUFJLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xCLE9BQU87UUFDWCxDQUFDO1FBRUQsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLENBQVU7WUFDL0UsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztTQUM1QixDQUFBLENBQUMsQ0FBQztRQUVKLHlCQUF5QjtRQUN6QixNQUFNLGNBQWMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUVqRSxnREFBZ0Q7UUFDaEQsaURBQWlEO1FBQ2pELElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCwyQkFBMkI7UUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNqRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUEwQztRQUN2RCxrRUFBa0U7UUFDbEUsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXhDLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUM5QyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQ3JDLENBQUM7SUFDTixDQUFDO0lBRUQsd0JBQXdCLENBQUMsS0FBeUM7UUFDOUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2xELENBQUM7Q0FDSiJ9