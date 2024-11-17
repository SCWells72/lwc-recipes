import { LightningElement, wire } from 'lwc';
import { gql, graphql, GraphQlQueryResponse } from 'lightning/uiGraphQLApi';

const pageSize = 3;

export default class GraphqlPagination extends LightningElement {
    // NOTE: Had to rename this to avoid a conflict with an inherited property
    myAfter: string;
    pageNumber = 1;

    @wire(graphql, {
        query: gql`
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
    contacts: WireResult<GraphQlQueryResponse>;

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
