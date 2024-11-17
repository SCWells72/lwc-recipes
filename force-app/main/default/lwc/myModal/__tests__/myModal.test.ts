import { createElement } from 'lwc';
import MyModal from 'c/myModal';
import LightningModalHeader from 'lightning/modalHeader';

describe('c-my-modal', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('displays label in the header', () => {
        // Create component and set the header public property
        const element = createElement<MyModal>('c-my-modal', {
            is: MyModal
        });
        element.header = 'My Modal Heading';
        document.body.appendChild(element);

        // Validate the modal header to have rendered with correct label
        expect(
            (element.shadowRoot.querySelector<LightningModalHeader>('lightning-modal-header')).label
        ).toBe('My Modal Heading');
    });

    it('displays content in the body', () => {
        // Create component and set the content public property
        const element = createElement<MyModal>('c-my-modal', {
            is: MyModal
        });
        element.content = 'My Modal Content';
        document.body.appendChild(element);

        // Validate the modal body to have rendered with correct content
        // @ts-expect-error Not sure what "modalBody$()" is
        expect(element.modalBody$().textContent).toBe(
            'Content: My Modal Content'
        );
    });

    it('displays close button in footer', () => {
        // Create component and set the content public property
        const element = createElement('c-my-modal', {
            is: MyModal
        });
        document.body.appendChild(element);

        // Validate the modal footer to have rendered with close button
        // @ts-expect-error Not sure what "modalFooter$()" is
        expect(element.modalFooter$('lightning-button').label).toBe('Close');
    });

    it('returns value when close button is clicked', () => {
        // Create component and set the content public property
        const element = createElement<MyModal>('c-my-modal', {
            is: MyModal
        });
        document.body.appendChild(element);

        // Query lightning-button element
        // @ts-expect-error Not sure what "modalFooter$()" is
        const buttonEl = element.modalFooter$('lightning-button');
        buttonEl.click();

        // Validate the element passes the value into this.close() method
        // @ts-expect-error Not sure what "closeValue" is
        expect(element.closeValue).toBe('return value');
    });

    it('is accessible when error is returned', async () => {
        // Create component
        const element = createElement('c-my-modal', {
            is: MyModal
        });
        document.body.appendChild(element);

        // Check accessibility
        await expect(element).toBeAccessible();
    });
});
