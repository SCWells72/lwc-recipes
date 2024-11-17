import { LightningElement, wire } from 'lwc';
import { gql, graphql, refreshGraphql } from 'lightning/uiGraphQLApi';
import randomizeAccountData from '@salesforce/apex/AccountController.randomizeAccountData';
export default class GraphqlRefresh extends LightningElement {
    graphqlResult;
    account;
    errors;
    isLoading = true;
    @wire(graphql, {
        query: gql `
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
    wiredValues(result) {
        this.isLoading = false;
        this.account = undefined;
        this.errors = undefined;
        // We hold a direct reference to the graphQL query result
        // so that we can refresh it with refreshGraphQL
        this.graphqlResult = result;
        const { error, data } = result;
        if (data) {
            const accounts = data.uiapi.query.Account.edges.map((edge) => ({
                Id: edge.node.Id,
                Name: edge.node.Name.value,
                NumberOfEmployees: edge.node.NumberOfEmployees.value
            }));
            if (accounts.length === 0) {
                this.errors = [`Couldn't find account.`];
            }
            else {
                this.account = accounts[0];
            }
        }
        if (error) {
            this.errors = error;
        }
    }
    async handleRandomizeClick() {
        this.isLoading = true;
        try {
            await randomizeAccountData({ accountId: this.account.Id });
        }
        catch (e) {
            this.errors = e;
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleRefreshClick() {
        this.isLoading = true;
        try {
            refreshGraphql(this.graphqlResult);
        }
        catch (e) {
            this.errors = e;
        }
        finally {
            this.isLoading = false;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhxbFJlZnJlc2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncmFwaHFsUmVmcmVzaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUF3QixjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RixPQUFPLG9CQUFvQixNQUFNLHlEQUF5RCxDQUFDO0FBRTNGLE1BQU0sQ0FBQyxPQUFPLE9BQU8sY0FBZSxTQUFRLGdCQUFnQjtJQUN4RCxhQUFhLENBQW1DO0lBQ2hELE9BQU8sQ0FBVTtJQUNqQixNQUFNLENBQTJCO0lBQ2pDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFFakIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ1gsS0FBSyxFQUFFLEdBQUcsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F1QlQ7S0FDSixDQUFDO0lBQ0YsV0FBVyxDQUFDLE1BQXdDO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBRXhCLHlEQUF5RDtRQUN6RCxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7UUFDNUIsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDL0IsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNQLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxDQUFVO2dCQUN6RSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFDMUIsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLO2FBQ3RELENBQUEsQ0FBQyxDQUFDO1lBQ0osSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUM3QyxDQUFDO2lCQUFNLENBQUM7Z0JBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsb0JBQW9CO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQztZQUNELE1BQU0sb0JBQW9CLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQztnQkFBUyxDQUFDO1lBQ1AsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsa0JBQWtCO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQztZQUNELGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNwQixDQUFDO2dCQUFTLENBQUM7WUFDUCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDO0lBQ0wsQ0FBQztDQUNKIn0=