import { wire, LightningElement } from 'lwc';
import { gql, graphql } from 'lightning/uiGraphQLApi';
export default class RecordPickerHello extends LightningElement {
    selectedRecordId = '';
    contact;
    wireError;
    get variables() {
        return {
            selectedRecordId: this.selectedRecordId
        };
    }
    handleChange(event) {
        this.selectedRecordId = event.detail.recordId;
    }
    // A GraphQL query is sent after the record picker change event has been dispatched.
    // This is the recommended practice for fetching record fields based on
    // the record picker change event's recordId.
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
                                    Phone {
                                        value
                                        displayValue
                                    }
                                    Title {
                                        value
                                    }
                                    Picture__c {
                                        value
                                        displayValue
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
            Id: edge.node.Id,
            Name: edge.node.Name.value,
            Phone: edge.node.Phone.value,
            Picture__c: edge.node.Picture__c.value,
            Title: edge.node.Title.value
        }));
        this.contact = graphqlResults?.[0];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkUGlja2VySGVsbG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNvcmRQaWNrZXJIZWxsby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHdEQsTUFBTSxDQUFDLE9BQU8sT0FBTyxpQkFBa0IsU0FBUSxnQkFBZ0I7SUFDM0QsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLE9BQU8sQ0FBVTtJQUNqQixTQUFTLENBQU07SUFFZixJQUFJLFNBQVM7UUFDVCxPQUFPO1lBQ0gsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUMxQyxDQUFDO0lBQ04sQ0FBQztJQUVELFlBQVksQ0FBQyxLQUF5QztRQUNsRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEQsQ0FBQztJQUVELG9GQUFvRjtJQUNwRix1RUFBdUU7SUFDdkUsNkNBQTZDO0lBQzdDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNYLEtBQUssRUFBRSxHQUFHLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0ErQlQ7UUFDRCxTQUFTLEVBQUUsWUFBWTtLQUMxQixDQUFDO0lBQ0YsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QixJQUFJLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xCLE9BQU87UUFDWCxDQUFDO1FBRUQsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLENBQVU7WUFDL0UsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUMxQixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztZQUM1QixVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSztZQUN0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztTQUM5QixDQUFBLENBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNKIn0=