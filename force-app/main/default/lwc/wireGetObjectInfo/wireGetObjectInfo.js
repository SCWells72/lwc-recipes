import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
export default class WireGetObjectInfo extends LightningElement {
    objectApiName;
    @wire(getObjectInfo, { objectApiName: '$objectApiName' })
    objectInfo;
    handleBtnClick() {
        this.objectApiName =
            (this.template.querySelector('lightning-input')).value;
    }
    get objectInfoStr() {
        return this.objectInfo
            ? JSON.stringify(this.objectInfo.data, null, 2)
            : '';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lyZUdldE9iamVjdEluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3aXJlR2V0T2JqZWN0SW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUkxRCxNQUFNLENBQUMsT0FBTyxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjtJQUMzRCxhQUFhLENBQVM7SUFFdEIsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLENBQUM7SUFDekQsVUFBVSxDQUF1QztJQUVqRCxjQUFjO1FBQ1YsSUFBSSxDQUFDLGFBQWE7WUFDZCxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFpQixpQkFBaUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQy9FLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVO1lBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDL0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7Q0FDSiJ9