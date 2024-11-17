import { LightningElement, wire } from 'lwc';
import { gql, graphql } from 'lightning/uiGraphQLApi';
export default class GraphqlContacts extends LightningElement {
    @wire(graphql, {
        query: gql `
            query getContacts {
                uiapi {
                    query {
                        Contact(
                            where: { Picture__c: { ne: null } }
                            first: 5
                            orderBy: { Name: { order: ASC } }
                        ) {
                            edges {
                                node {
                                    Id
                                    Name {
                                        value
                                    }
                                    Phone {
                                        value
                                    }
                                    # We specify an alias for this custom field to ensure
                                    # that we can find it in the result even if Salesforce's
                                    # referential integrity logic updates the name. API names
                                    # for standard fields do not change, so no aliases are
                                    # needed for those.
                                    Picture__c: Picture__c {
                                        value
                                    }
                                    Title {
                                        value
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `
    })
    graphql;
    get contacts() {
        // TODO: It'd be great to have the ability to more strongly-type graphQL stuff
        return this.graphql.data?.uiapi.query.Contact.edges.map((edge) => ({
            Id: edge.node.Id,
            Name: edge.node.Name.value,
            Phone: edge.node.Phone.value,
            Picture__c: edge.node.Picture__c.value,
            Title: edge.node.Title.value
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhxbENvbnRhY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JhcGhxbENvbnRhY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDN0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQXdCLE1BQU0sd0JBQXdCLENBQUM7QUFFNUUsTUFBTSxDQUFDLE9BQU8sT0FBTyxlQUFnQixTQUFRLGdCQUFnQjtJQUN6RCxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWCxLQUFLLEVBQUUsR0FBRyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQW1DVDtLQUNKLENBQUM7SUFDRixPQUFPLENBQW1DO0lBRTFDLElBQUksUUFBUTtRQUNSLDhFQUE4RTtRQUM5RSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLENBQVU7WUFDN0UsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUMxQixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztZQUM1QixVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSztZQUN0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztTQUM5QixDQUFBLENBQUMsQ0FBQztJQUNSLENBQUM7Q0FDSiJ9