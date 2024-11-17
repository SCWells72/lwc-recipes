import { LightningElement } from 'lwc';
// The base URL (in this case https://www.googleapis.com/ must be added to the CSP Trusted Sites in Setup)
const QUERY_URL = 'https://www.googleapis.com/books/v1/volumes?langRestrict=en&q=';
// noinspection ExceptionCaughtLocallyJS
export default class MiscRestCall extends LightningElement {
    searchKey = 'Harry Potter';
    books;
    error;
    isLoading = false;
    handleSearchKeyChange(event) {
        this.searchKey = event.target.value;
    }
    async handleSearchClick() {
        try {
            this.isLoading = true;
            const response = await fetch(QUERY_URL + this.searchKey);
            // fetch isn't throwing an error if the request fails.
            // Therefore we have to check the ok property.
            // The thrown error will be caught on the catch() method
            if (!response.ok) {
                // @ts-expect-error This looks like an invalid invocation
                throw Error(response);
            }
            this.books = await response.json();
        }
        catch (error) {
            this.error = error;
            this.books = undefined;
        }
        finally {
            // Remove spinner once we're done regardless of whether the operation succeeded or not
            this.isLoading = false;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY1Jlc3RBcGlDYWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWlzY1Jlc3RBcGlDYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUd2QywwR0FBMEc7QUFDMUcsTUFBTSxTQUFTLEdBQ1gsZ0VBQWdFLENBQUM7QUFFckUsd0NBQXdDO0FBQ3hDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sWUFBYSxTQUFRLGdCQUFnQjtJQUN0RCxTQUFTLEdBQUcsY0FBYyxDQUFDO0lBQzNCLEtBQUssQ0FBTTtJQUNYLEtBQUssQ0FBTTtJQUNYLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFFbEIscUJBQXFCLENBQUMsS0FBa0M7UUFDcEQsSUFBSSxDQUFDLFNBQVMsR0FBb0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7SUFDMUQsQ0FBQztJQUVELEtBQUssQ0FBQyxpQkFBaUI7UUFDbkIsSUFBSSxDQUFDO1lBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6RCxzREFBc0Q7WUFDdEQsOENBQThDO1lBQzlDLHdEQUF3RDtZQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNmLHlEQUF5RDtnQkFDekQsTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUIsQ0FBQztZQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkMsQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUMzQixDQUFDO2dCQUFTLENBQUM7WUFDUCxzRkFBc0Y7WUFDdEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQztJQUNMLENBQUM7Q0FDSiJ9