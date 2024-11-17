import { LightningElement, wire } from 'lwc';
import { gql, graphql } from 'lightning/uiGraphQLApi';
/** The delay used when debouncing event handlers before invoking Apex. */
const DELAY = 300;
export default class GraphqlVariables extends LightningElement {
    searchKey = '';
    @wire(graphql, {
        query: gql `
            query searchContacts($searchKey: String!, $limit: Int = 5) {
                uiapi {
                    query {
                        Contact(
                            where: { Name: { like: $searchKey } }
                            first: $limit
                            orderBy: { Name: { order: ASC } }
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
    contacts;
    /**
     * Since GraphQL variable values are nested within an object, a getter function
     * must be used to make the variables reactive. LWC will re-run this function &
     * re-evaluate the GraphQL query when the component properties referenced in
     * this function change.
     */
    get variables() {
        return {
            searchKey: this.searchKey === '' ? '%' : `%${this.searchKey}%`
        };
    }
    handleKeyChange(event) {
        // Debouncing this method: Do not update the reactive property as long as this function is
        // being called within a delay of DELAY. This is to avoid a very large number of Apex method calls.
        // @ts-expect-error Where is "delayTimeout" defined?
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        // @ts-expect-error Where is "delayTimeout" defined?
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.delayTimeout = setTimeout(() => {
            this.searchKey = searchKey;
        }, DELAY);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhxbFZhcmlhYmxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyYXBocWxWYXJpYWJsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBd0IsTUFBTSx3QkFBd0IsQ0FBQztBQUc1RSwwRUFBMEU7QUFDMUUsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBRWxCLE1BQU0sQ0FBQyxPQUFPLE9BQU8sZ0JBQWlCLFNBQVEsZ0JBQWdCO0lBQzFELFNBQVMsR0FBRyxFQUFFLENBQUM7SUFFZixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWCxLQUFLLEVBQUUsR0FBRyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FxQlQ7UUFDRCxTQUFTLEVBQUUsWUFBWTtLQUMxQixDQUFDO0lBQ0YsUUFBUSxDQUFtQztJQUUzQzs7Ozs7T0FLRztJQUNILElBQUksU0FBUztRQUNULE9BQU87WUFDSCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHO1NBQ2pFLENBQUM7SUFDTixDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQWtDO1FBQzlDLDBGQUEwRjtRQUMxRixtR0FBbUc7UUFDbkcsb0RBQW9EO1FBQ3BELE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sU0FBUyxHQUFvQixLQUFLLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztRQUN2RCxvREFBb0Q7UUFDcEQsdURBQXVEO1FBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMvQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDZCxDQUFDO0NBQ0oifQ==