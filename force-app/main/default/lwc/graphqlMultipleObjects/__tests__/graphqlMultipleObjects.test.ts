import { createElement } from 'lwc';
import GraphqlMultipleObjects from 'c/graphqlMultipleObjects';
import { graphql } from 'lightning/uiGraphQLApi';

// Mock realistic data
import mockGraphQL from './data/graphqlMultipleObjectsResponse.json';
import { LdsTestWireAdapter } from '@salesforce/wire-service-jest-util';

describe('c-graphql-multiple-objects', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    // Helper function to wait until the microtask queue is empty. This is needed for promise
    // timing when calling imperative Apex.
    async function flushPromises() {
        return Promise.resolve();
    }

    describe('graphql @wire data', () => {
        it('renders accounts and contacts', async () => {
            // Create component
            const element = createElement('c-graphql-multiple-objects', {
                is: GraphqlMultipleObjects
            });
            document.body.appendChild(element);

            // Emit data from @wire
            (<LdsTestWireAdapter><unknown>graphql).emit(mockGraphQL);

            // Wait for any asynchronous DOM updates
            await flushPromises();

            const accountEls =
                element.shadowRoot.querySelectorAll<HTMLParagraphElement>('div.accounts > p');
            expect(accountEls.length).toBe(5);
            accountEls.forEach((account, i) => {
                expect(account.innerText).toBe(
                    (<Account>mockGraphQL.uiapi.query.Account.edges[i]).Name
                );
            });

            const contactEls =
                element.shadowRoot.querySelectorAll<HTMLParagraphElement>('div.contacts > p');
            expect(contactEls.length).toBe(5);
            contactEls.forEach((contact, i) => {
                expect(contact.innerText).toBe(
                    (<Contact>mockGraphQL.uiapi.query.Contact.edges[i]).Name
                );
            });
        });
    });

    describe('graphql @wire error', () => {
        it('shows error panel element', async () => {
            // Create component
            const element = createElement('c-graphql-multiple-objects', {
                is: GraphqlMultipleObjects
            });
            document.body.appendChild(element);

            // Emit error from @wire
            // @ts-expect-error What is this signature? It doesn't exist on the test wire adapters to my knowledge
            graphql.emitErrors(['an error']);

            // Wait for any asynchronous DOM updates
            await flushPromises();

            // Verify error panel is displayed
            // Check for error panel
            const errorPanelEl =
                element.shadowRoot.querySelector('c-error-panel');
            expect(errorPanelEl).not.toBeNull();
        });
    });

    it('is accessible when data returned', async () => {
        // Create component
        const element = createElement('c-graphql-multiple-objects', {
            is: GraphqlMultipleObjects
        });
        document.body.appendChild(element);

        // Emit data from @wire
        (<LdsTestWireAdapter><unknown>graphql).emit(mockGraphQL);

        // Wait for any asynchronous DOM updates
        await flushPromises();

        // Check accessibility
        await expect(element).toBeAccessible();
    });

    it('is accessible when error returned', async () => {
        // Create component
        const element = createElement('c-graphql-multiple-objects', {
            is: GraphqlMultipleObjects
        });
        document.body.appendChild(element);

        // Emit error from @wire
        // @ts-expect-error What is this signature? It doesn't exist on the test wire adapters to my knowledge
        graphql.emitErrors(['an error']);

        // Wait for any asynchronous DOM updates
        await flushPromises();

        // Check accessibility
        await expect(element).toBeAccessible();
    });
});
