import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';
export default class NavToNewRecordWithDefaults extends NavigationMixin(LightningElement) {
    navigateToNewContactWithDefaults() {
        const defaultValues = encodeDefaultFieldValues({
            FirstName: 'Morag',
            LastName: 'de Fault',
            LeadSource: 'Other'
        });
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: defaultValues
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2VG9OZXdSZWNvcmRXaXRoRGVmYXVsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXZUb05ld1JlY29yZFdpdGhEZWZhdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDdkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXhFLE1BQU0sQ0FBQyxPQUFPLE9BQU8sMEJBQTJCLFNBQVEsZUFBZSxDQUNuRSxnQkFBZ0IsQ0FDbkI7SUFDRyxnQ0FBZ0M7UUFDNUIsTUFBTSxhQUFhLEdBQUcsd0JBQXdCLENBQVU7WUFDcEQsU0FBUyxFQUFFLE9BQU87WUFDbEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsVUFBVSxFQUFFLE9BQU87U0FDdEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQixJQUFJLEVBQUUsc0JBQXNCO1lBQzVCLFVBQVUsRUFBRTtnQkFDUixhQUFhLEVBQUUsU0FBUztnQkFDeEIsVUFBVSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsa0JBQWtCLEVBQUUsYUFBYTthQUNwQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSiJ9