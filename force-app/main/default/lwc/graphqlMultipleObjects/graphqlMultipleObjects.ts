import { LightningElement, wire } from 'lwc';
import { gql, graphql, GraphQlQueryResponse } from 'lightning/uiGraphQLApi';

export default class GraphqlMultipleObjects extends LightningElement {
    @wire(graphql, {
        query: gql`
            query getAccountAndContacts {
                uiapi {
                    query {
                        Account(first: 5) {
                            edges {
                                node {
                                    Id
                                    Name {
                                        value
                                    }
                                }
                            }
                        }
                        Contact(first: 5) {
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
        `
    })
    graphql: WireResult<GraphQlQueryResponse>;

    get accounts() {
        // TODO: It'd be great to have the ability to more strongly-type graphQL stuff
        return this.graphql.data?.uiapi.query.Account.edges.map((edge: any) => (<Account>{
            Id: edge.node.Id,
            Name: edge.node.Name.value
        }));
    }

    get contacts() {
        // TODO: It'd be great to have the ability to more strongly-type graphQL stuff
        return this.graphql.data?.uiapi.query.Contact.edges.map((edge: any) => (<Contact>{
            Id: edge.node.Id,
            Name: edge.node.Name.value
        }));
    }
}
