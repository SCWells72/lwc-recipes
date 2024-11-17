import { LightningElement } from 'lwc';
export default class LightDomQuery extends LightningElement {
    handleButtonClick() {
        // Elements that are inside a Light DOM child component are directly accessible by the parent
        // @ts-expect-error Access to private property
        this.template.querySelector('p.lightDomParagraph').innerText =
            'Text changed by parent';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHREb21RdWVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpZ2h0RG9tUXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRXZDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sYUFBYyxTQUFRLGdCQUFnQjtJQUN2RCxpQkFBaUI7UUFDYiw2RkFBNkY7UUFDN0YsOENBQThDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUMsU0FBUztZQUN4RCx3QkFBd0IsQ0FBQztJQUNqQyxDQUFDO0NBQ0oifQ==