import { LightningElement, wire } from 'lwc';
import { gql, graphql } from 'lightning/uiGraphQLApi';
const pageSize = 3;
export default class GraphqlPagination extends LightningElement {
    // @ts-expect-error Overrides a base property; should probably rename it
    after;
    pageNumber = 1;
    @wire(graphql, {
        query: gql `
            query paginatedContacts($after: String, $pageSize: Int!) {
                uiapi {
                    query {
                        Contact(
                            first: $pageSize
                            after: $after
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
            after: this.after || null,
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
            this.after =
                this.contacts.data.uiapi.query.Contact.pageInfo.endCursor;
            this.pageNumber++;
        }
    }
    handleReset() {
        this.after = null;
        this.pageNumber = 1;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhxbFBhZ2luYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncmFwaHFsUGFnaW5hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUF3QixNQUFNLHdCQUF3QixDQUFDO0FBRTVFLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQztBQUVuQixNQUFNLENBQUMsT0FBTyxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjtJQUMzRCx3RUFBd0U7SUFDeEUsS0FBSyxDQUFTO0lBQ2QsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUVmLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNYLEtBQUssRUFBRSxHQUFHLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBNkJUO1FBQ0QsU0FBUyxFQUFFLFlBQVk7S0FDMUIsQ0FBQztJQUNGLFFBQVEsQ0FBbUM7SUFFM0MsSUFBSSxTQUFTO1FBQ1QsT0FBTztZQUNILEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUk7WUFDekIsUUFBUTtTQUNYLENBQUM7SUFDTixDQUFDO0lBRUQsSUFBSSxpQkFBaUI7UUFDakIsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUTthQUNuRCxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksVUFBVTtRQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELElBQUksVUFBVTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxVQUFVO1FBQ04sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDL0QsSUFBSSxDQUFDLEtBQUs7Z0JBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUM5RCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNKIn0=