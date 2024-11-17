import { LightningElement, wire } from 'lwc';
import { gql, graphql, GraphQlQueryResponse, refreshGraphQL } from 'lightning/uiGraphQLApi';
import randomizeAccountData from '@salesforce/apex/AccountController.randomizeAccountData';

export default class GraphqlRefresh extends LightningElement {
    graphqlResult: WireResult<GraphQlQueryResponse>;
    account: Account;
    errors: FetchResponse | string[];
    isLoading = true;

    @wire(graphql, {
        query: gql`
            query getAccount {
                uiapi {
                    query {
                        Account(
                            where: { Name: { eq: "Alpha Dynamics" } }
                            first: 1
                        ) {
                            edges {
                                node {
                                    Id
                                    Name {
                                        value
                                    }
                                    NumberOfEmployees {
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
    wiredValues(result: WireResult<GraphQlQueryResponse>) {
        this.isLoading = false;
        this.account = undefined;
        this.errors = undefined;

        // We hold a direct reference to the graphQL query result
        // so that we can refresh it with refreshGraphQL
        this.graphqlResult = result;
        if (result.data) {
            const accounts = result.data.uiapi.query.Account.edges.map((edge: any) => (<Account>{
                Id: edge.node.Id,
                Name: edge.node.Name.value,
                NumberOfEmployees: edge.node.NumberOfEmployees.value
            }));
            if (accounts.length === 0) {
                this.errors = [`Couldn't find account.`];
            } else {
                this.account = accounts[0];
            }
        }
        // @ts-expect-error Why is this "errors" instead of "error"?
        if (result.errors) {
            // @ts-expect-error Why is this "errors" instead of "error"?
            this.errors = result.errors;
        }
    }

    async handleRandomizeClick() {
        this.isLoading = true;
        try {
            await randomizeAccountData({ accountId: this.account.Id });
        } catch (e) {
            this.errors = e;
        } finally {
            this.isLoading = false;
        }
    }

    async handleRefreshClick() {
        this.isLoading = true;
        try {
            refreshGraphQL(this.graphqlResult);
        } catch (e) {
            this.errors = e;
        } finally {
            this.isLoading = false;
        }
    }
}
