import { LightningElement, wire } from 'lwc';
import { gql, graphql, GraphQlQueryResponse } from 'lightning/uiGraphQLApi';

export default class GraphqlContacts extends LightningElement {
    @wire(graphql, {
        query: gql`
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
    graphql: WireResult<GraphQlQueryResponse>;

    get contacts() {
        // TODO: It'd be great to have the ability to more strongly-type graphQL stuff
        return this.graphql.data?.uiapi.query.Contact.edges.map((edge: any) => (<Contact>{
            Id: edge.node.Id,
            Name: edge.node.Name.value,
            Phone: edge.node.Phone.value,
            Picture__c: edge.node.Picture__c.value,
            Title: edge.node.Title.value
        }));
    }
}
