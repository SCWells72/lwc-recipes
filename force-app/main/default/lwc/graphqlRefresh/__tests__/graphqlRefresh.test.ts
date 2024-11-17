import { createElement } from 'lwc';
import GraphqlRefresh from 'c/graphqlRefresh';
import { graphql, refreshGraphql } from 'lightning/uiGraphQLApi';
import randomizeAccountData from '@salesforce/apex/AccountController.randomizeAccountData';
import { LdsTestWireAdapter } from '@salesforce/wire-service-jest-util';
import LightningButton from 'lightning/button';

// Mock realistic data
import mockGraphQL from './data/graphqlAccountResponse.json';
import mockGraphQLNoAccount from './data/graphqlNoAccountResponse.json';

// Mock randomize Apex wire adapter
jest.mock(
    '@salesforce/apex/AccountController.randomizeAccountData',
    () => {
        const {
            createApexTestWireAdapter
            // eslint-disable-next-line @typescript-eslint/no-require-imports
        } = require('@salesforce/sfdx-lwc-jest');
        return {
            default: createApexTestWireAdapter(jest.fn())
        };
    },
    { virtual: true }
);

// Mock uiGraphQLApi module
jest.mock(
    '@salesforce/uiGraphQLApi',
    () => {
        // Inject a refreshGraphQL mock
        return {
            refreshGraphQL: jest.fn(() => Promise.resolve())
        };
    },
    { virtual: true }
);

describe('c-graphql-refresh', () => {
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
        it('renders account info', async () => {
            // Create component
            const element = createElement('c-graphql-refresh', {
                is: GraphqlRefresh
            });
            document.body.appendChild(element);

            // Emit data from @wire
            (<LdsTestWireAdapter><unknown>graphql).emit(mockGraphQL);

            // Wait for any asynchronous DOM updates
            await flushPromises();

            // Check that record info is displayed
            const account = mockGraphQL.uiapi.query.Account.edges[0].node;
            const accountInfoEl =
                element.shadowRoot.querySelector('.account-info');
            expect(accountInfoEl).not.toBeNull();
            expect(accountInfoEl.textContent).toBe(
                `The ${account.Name.value} account has ${account.NumberOfEmployees.value} employees.`
            );
        });

        it('renders error when no account found', async () => {
            // Create component
            const element = createElement('c-graphql-refresh', {
                is: GraphqlRefresh
            });
            document.body.appendChild(element);

            // Emit data from @wire
            (<LdsTestWireAdapter><unknown>graphql).emit(mockGraphQLNoAccount);

            // Wait for any asynchronous DOM updates
            await flushPromises();

            // Verify error panel is displayed
            // Check for error panel
            const errorPanelEl =
                element.shadowRoot.querySelector('c-error-panel');
            expect(errorPanelEl).not.toBeNull();
        });

        it('is accessible when data returned', async () => {
            // Create component
            const element = createElement('c-graphql-refresh', {
                is: GraphqlRefresh
            });
            document.body.appendChild(element);

            // Emit data from @wire
            (<LdsTestWireAdapter><unknown>graphql).emit(mockGraphQL);

            // Wait for any asynchronous DOM updates
            await flushPromises();

            // Check accessibility
            await expect(element).toBeAccessible();
        });
    });

    describe('graphql @wire error', () => {
        it('shows error panel element', async () => {
            // Create component
            const element = createElement('c-graphql-refresh', {
                is: GraphqlRefresh
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

        it('is accessible when error returned', async () => {
            // Create component
            const element = createElement('c-graphql-refresh', {
                is: GraphqlRefresh
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

    describe('graphql refresh', () => {
        it('calls refreshGraphQL when refresh is clicked', async () => {
            // Create component
            const element = createElement('c-graphql-refresh', {
                is: GraphqlRefresh
            });
            document.body.appendChild(element);

            // Emit data from @wire
            (<LdsTestWireAdapter><unknown>graphql).emit(mockGraphQL);

            // Wait for any asynchronous DOM updates
            await flushPromises();

            // Click refresh button
            (element.shadowRoot
                .querySelector<LightningButton>('lightning-button.refresh'))
                .click();

            // Check that refreshGraphQL was called
            expect(refreshGraphql).toHaveBeenCalled();
        });
    });

    describe('randomize account data', () => {
        it('calls randomizeAccountData when randomize is clicked', async () => {
            // Create component
            const element = createElement('c-graphql-refresh', {
                is: GraphqlRefresh
            });
            document.body.appendChild(element);

            // Emit data from @wire
            (<LdsTestWireAdapter><unknown>graphql).emit(mockGraphQL);

            // Wait for any asynchronous DOM updates
            await flushPromises();

            // Click randomize button
            (element.shadowRoot
                .querySelector<LightningButton>('lightning-button.randomize'))
                .click();

            // Check that randomizeAccountData was called
            expect(randomizeAccountData).toHaveBeenCalled();
        });
    });
});
