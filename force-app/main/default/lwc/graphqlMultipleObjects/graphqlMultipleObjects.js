import { LightningElement, wire } from 'lwc';
import { gql, graphql } from 'lightning/uiGraphQLApi';
export default class GraphqlMultipleObjects extends LightningElement {
    @wire(graphql, {
        query: gql `
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
    graphql;
    get accounts() {
        // TODO: It'd be great to have the ability to more strongly-type graphQL stuff
        return this.graphql.data?.uiapi.query.Account.edges.map((edge) => ({
            Id: edge.node.Id,
            Name: edge.node.Name.value
        }));
    }
    get contacts() {
        // TODO: It'd be great to have the ability to more strongly-type graphQL stuff
        return this.graphql.data?.uiapi.query.Contact.edges.map((edge) => ({
            Id: edge.node.Id,
            Name: edge.node.Name.value
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhxbE11bHRpcGxlT2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyYXBocWxNdWx0aXBsZU9iamVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBd0IsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RSxNQUFNLENBQUMsT0FBTyxPQUFPLHNCQUF1QixTQUFRLGdCQUFnQjtJQUNoRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWCxLQUFLLEVBQUUsR0FBRyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0EyQlQ7S0FDSixDQUFDO0lBQ0YsT0FBTyxDQUFtQztJQUUxQyxJQUFJLFFBQVE7UUFDUiw4RUFBOEU7UUFDOUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxDQUFVO1lBQzdFLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7U0FDNUIsQ0FBQSxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1IsOEVBQThFO1FBQzlFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsQ0FBVTtZQUM3RSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1NBQzVCLENBQUEsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztDQUNKIn0=