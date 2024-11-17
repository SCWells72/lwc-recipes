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
        if (result.data) {
            const accounts = result.data.uiapi.query.Account.edges.map((edge) => ({
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
        if (result.error) {
            this.errors = result.error;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhxbFJlZnJlc2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncmFwaHFsUmVmcmVzaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUF3QixjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RixPQUFPLG9CQUFvQixNQUFNLHlEQUF5RCxDQUFDO0FBRTNGLE1BQU0sQ0FBQyxPQUFPLE9BQU8sY0FBZSxTQUFRLGdCQUFnQjtJQUN4RCxhQUFhLENBQW1DO0lBQ2hELE9BQU8sQ0FBVTtJQUNqQixNQUFNLENBQTJCO0lBQ2pDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFFakIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ1gsS0FBSyxFQUFFLEdBQUcsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F1QlQ7S0FDSixDQUFDO0lBQ0YsV0FBVyxDQUFDLE1BQXdDO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBRXhCLHlEQUF5RDtRQUN6RCxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7UUFDNUIsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLENBQVU7Z0JBQ2hGLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUMxQixpQkFBaUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUs7YUFDdEQsQ0FBQSxDQUFDLENBQUM7WUFDSixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQzdDLENBQUM7aUJBQU0sQ0FBQztnQkFDSixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQy9CLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLG9CQUFvQjtRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUM7WUFDRCxNQUFNLG9CQUFvQixDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7Z0JBQVMsQ0FBQztZQUNQLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLGtCQUFrQjtRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUM7WUFDRCxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQztnQkFBUyxDQUFDO1lBQ1AsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQztJQUNMLENBQUM7Q0FDSiJ9