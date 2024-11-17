import { LightningElement } from 'lwc';
export default class EventSimple extends LightningElement {
    page = 1;
    handlePrevious() {
        if (this.page > 1) {
            this.page -= 1;
        }
    }
    handleNext() {
        this.page += 1;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRTaW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmVudFNpbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFFdkMsTUFBTSxDQUFDLE9BQU8sT0FBTyxXQUFZLFNBQVEsZ0JBQWdCO0lBQ3JELElBQUksR0FBRyxDQUFDLENBQUM7SUFFVCxjQUFjO1FBQ1YsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ25CLENBQUM7SUFDTCxDQUFDO0lBRUQsVUFBVTtRQUNOLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQ25CLENBQUM7Q0FDSiJ9