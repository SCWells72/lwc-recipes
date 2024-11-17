import { LightningElement } from 'lwc';
import USER_LOCALE from '@salesforce/i18n/locale';
import USER_CURRENCY from '@salesforce/i18n/currency';
// noinspection JSMethodCanBeStatic
export default class I18n extends LightningElement {
    userLocale = USER_LOCALE;
    userCurrency = USER_CURRENCY;
    japanLocale = 'ja-JP';
    japanCurrency = 'JPY';
    get dateUserLocale() {
        const date = new Date();
        return new Intl.DateTimeFormat(USER_LOCALE).format(date);
    }
    get dateJapanLocale() {
        const date = new Date();
        return new Intl.DateTimeFormat(this.japanLocale).format(date);
    }
    get currencyUserLocale() {
        return new Intl.NumberFormat(USER_LOCALE, {
            style: 'currency',
            currency: USER_CURRENCY,
            currencyDisplay: 'symbol'
        }).format(100);
    }
    get currencyJapanLocale() {
        return new Intl.NumberFormat(this.japanLocale, {
            style: 'currency',
            currency: this.japanCurrency,
            currencyDisplay: 'symbol'
        }).format(100);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY0kxOG4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtaXNjSTE4bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDdkMsT0FBTyxXQUFXLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxhQUFhLE1BQU0sMkJBQTJCLENBQUM7QUFFdEQsbUNBQW1DO0FBQ25DLE1BQU0sQ0FBQyxPQUFPLE9BQU8sSUFBSyxTQUFRLGdCQUFnQjtJQUM5QyxVQUFVLEdBQUcsV0FBVyxDQUFDO0lBQ3pCLFlBQVksR0FBRyxhQUFhLENBQUM7SUFDN0IsV0FBVyxHQUFHLE9BQU8sQ0FBQztJQUN0QixhQUFhLEdBQUcsS0FBSyxDQUFDO0lBRXRCLElBQUksY0FBYztRQUNkLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEIsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFJLGVBQWU7UUFDZixNQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELElBQUksa0JBQWtCO1FBQ2xCLE9BQU8sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRTtZQUN0QyxLQUFLLEVBQUUsVUFBVTtZQUNqQixRQUFRLEVBQUUsYUFBYTtZQUN2QixlQUFlLEVBQUUsUUFBUTtTQUM1QixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxJQUFJLG1CQUFtQjtRQUNuQixPQUFPLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzNDLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUM1QixlQUFlLEVBQUUsUUFBUTtTQUM1QixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7Q0FDSiJ9