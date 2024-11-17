import { LightningElement } from 'lwc';
import chartjs from '@salesforce/resourceUrl/chartJs';
import { loadScript } from 'lightning/platformResourceLoader';
/**
 * When using this component in an LWR site, please import the below custom implementation of 'loadScript' module
 * instead of the one from 'lightning/platformResourceLoader'
 *
 * import { loadScript } from 'c/resourceLoader';
 *
 * This workaround is implemented to get around a limitation of the Lightning Locker library in LWR sites.
 * Read more about it in the "Lightning Locker Limitations" section of the documentation
 * https://developer.salesforce.com/docs/atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_limitations.htm
 */
const generateRandomNumber = () => {
    return Math.round(Math.random() * 100);
};
// noinspection CssConvertColorToHexInspection
export default class LibsChartjs extends LightningElement {
    error;
    chart;
    chartjsInitialized = false;
    config = {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [
                        generateRandomNumber(),
                        generateRandomNumber(),
                        generateRandomNumber(),
                        generateRandomNumber(),
                        generateRandomNumber()
                    ],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)'
                    ],
                    label: 'Dataset 1'
                }
            ],
            labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue']
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    position: 'right'
                }
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };
    async renderedCallback() {
        if (this.chartjsInitialized) {
            return;
        }
        this.chartjsInitialized = true;
        try {
            await loadScript(this, chartjs);
            const canvas = document.createElement('canvas');
            this.template.querySelector('div.chart').appendChild(canvas);
            const ctx = canvas.getContext('2d');
            // @ts-expect-error How do we get strong types for static resource imports?
            this.chart = new window.Chart(ctx, this.config);
        }
        catch (error) {
            this.error = error;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlic0NoYXJ0anMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaWJzQ2hhcnRqcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDdkMsT0FBTyxPQUFPLE1BQU0saUNBQWlDLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlEOzs7Ozs7Ozs7R0FTRztBQUVILE1BQU0sb0JBQW9CLEdBQUcsR0FBRyxFQUFFO0lBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDO0FBRUYsOENBQThDO0FBQzlDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sV0FBWSxTQUFRLGdCQUFnQjtJQUNyRCxLQUFLLENBQU07SUFDWCxLQUFLLENBQU07SUFDWCxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFFM0IsTUFBTSxHQUFHO1FBQ0wsSUFBSSxFQUFFLFVBQVU7UUFDaEIsSUFBSSxFQUFFO1lBQ0YsUUFBUSxFQUFFO2dCQUNOO29CQUNJLElBQUksRUFBRTt3QkFDRixvQkFBb0IsRUFBRTt3QkFDdEIsb0JBQW9CLEVBQUU7d0JBQ3RCLG9CQUFvQixFQUFFO3dCQUN0QixvQkFBb0IsRUFBRTt3QkFDdEIsb0JBQW9CLEVBQUU7cUJBQ3pCO29CQUNELGVBQWUsRUFBRTt3QkFDYixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLG1CQUFtQjtxQkFDdEI7b0JBQ0QsS0FBSyxFQUFFLFdBQVc7aUJBQ3JCO2FBQ0o7WUFDRCxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO1NBQ3ZEO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsVUFBVSxFQUFFLEtBQUs7WUFDakIsT0FBTyxFQUFFO2dCQUNMLE1BQU0sRUFBRTtvQkFDSixRQUFRLEVBQUUsT0FBTztpQkFDcEI7YUFDSjtZQUNELFNBQVMsRUFBRTtnQkFDUCxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsYUFBYSxFQUFFLElBQUk7YUFDdEI7U0FDSjtLQUNKLENBQUM7SUFFRixLQUFLLENBQUMsZ0JBQWdCO1FBQ2xCLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsT0FBTztRQUNYLENBQUM7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRS9CLElBQUksQ0FBQztZQUNELE1BQU0sVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNoQyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3RCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLDJFQUEyRTtZQUMzRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQztJQUNMLENBQUM7Q0FDSiJ9