import { LightningElement, wire } from 'lwc';
import { gql, graphql } from 'lightning/uiGraphQLApi';
const pageSize = 3;
export default class GraphqlPagination extends LightningElement {
    // NOTE: Had to rename this to avoid a conflict with an inherited property
    myAfter;
    pageNumber = 1;
    @wire(graphql, {
        query: gql `
            query paginatedContacts($myAfter: String, $pageSize: Int!) {
                uiapi {
                    query {
                        Contact(
                            first: $pageSize
                            after: $myAfter
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
                            pageInfo {
                                endCursor
                                hasNextPage
                                hasPreviousPage
                            }
                            # Requesting totalCount can have performance implications
                            # for large and/or complex queries. Use with caution.
                            totalCount
                        }
                    }
                }
            }
        `,
        variables: '$variables'
    })
    contacts;
    get variables() {
        return {
            after: this.myAfter || null,
            pageSize
        };
    }
    get currentPageNumber() {
        return this.totalCount === 0 ? 0 : this.pageNumber;
    }
    get isFirstPage() {
        return !this.contacts.data?.uiapi.query.Contact.pageInfo
            .hasPreviousPage;
    }
    get isLastPage() {
        return !this.contacts.data?.uiapi.query.Contact.pageInfo.hasNextPage;
    }
    get totalCount() {
        return this.contacts.data?.uiapi.query.Contact.totalCount || 0;
    }
    get totalPages() {
        return Math.ceil(this.totalCount / pageSize);
    }
    handleNext() {
        if (this.contacts.data?.uiapi.query.Contact.pageInfo.hasNextPage) {
            this.myAfter =
                this.contacts.data.uiapi.query.Contact.pageInfo.endCursor;
            this.pageNumber++;
        }
    }
    handleReset() {
        this.myAfter = null;
        this.pageNumber = 1;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhxbFBhZ2luYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncmFwaHFsUGFnaW5hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUF3QixNQUFNLHdCQUF3QixDQUFDO0FBRTVFLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQztBQUVuQixNQUFNLENBQUMsT0FBTyxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjtJQUMzRCwwRUFBMEU7SUFDMUUsT0FBTyxDQUFTO0lBQ2hCLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFFZixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWCxLQUFLLEVBQUUsR0FBRyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQTZCVDtRQUNELFNBQVMsRUFBRSxZQUFZO0tBQzFCLENBQUM7SUFDRixRQUFRLENBQW1DO0lBRTNDLElBQUksU0FBUztRQUNULE9BQU87WUFDSCxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJO1lBQzNCLFFBQVE7U0FDWCxDQUFDO0lBQ04sQ0FBQztJQUVELElBQUksaUJBQWlCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN2RCxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVE7YUFDbkQsZUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDVixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztJQUN6RSxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsVUFBVTtRQUNOLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQy9ELElBQUksQ0FBQyxPQUFPO2dCQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7WUFDOUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDSiJ9