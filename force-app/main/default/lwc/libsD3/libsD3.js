/* global d3 */
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
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
import D3 from '@salesforce/resourceUrl/d3';
import DATA from './data';
// noinspection LocalVariableNamingConventionJS,JSVoidFunctionReturnValueUsed,MagicNumberJS
export default class LibsD3 extends LightningElement {
    svgWidth = 400;
    svgHeight = 400;
    d3Initialized = false;
    async renderedCallback() {
        if (this.d3Initialized) {
            return;
        }
        this.d3Initialized = true;
        try {
            await Promise.all([
                loadScript(this, D3 + '/d3.v5.min.js'),
                loadStyle(this, D3 + '/style.css')
            ]);
            this.initializeD3();
        }
        catch (error) {
            this.dispatchEvent(new ShowToastEvent({
                title: 'Error loading D3',
                message: error.message,
                variant: 'error'
            }));
        }
    }
    initializeD3() {
        // Example adopted from https://bl.ocks.org/mbostock/2675ff61ea5e063ede2b5d63c08020c7
        // @ts-expect-error How do we resolve types imported from static resources?
        const svg = d3.select(this.template.querySelector('svg.d3'));
        const width = this.svgWidth;
        const height = this.svgHeight;
        // @ts-expect-error How do we resolve types imported from static resources?
        const color = d3.scaleOrdinal(d3.schemeDark2);
        // @ts-expect-error How do we resolve types imported from static resources?
        const simulation = d3
            .forceSimulation()
            .force('link', 
        // @ts-expect-error How do we resolve types imported from static resources?
        d3.forceLink().id((d) => {
            return d.id;
        }))
            // @ts-expect-error How do we resolve types imported from static resources?
            .force('charge', d3.forceManyBody())
            // @ts-expect-error How do we resolve types imported from static resources?
            .force('center', d3.forceCenter(width / 2, height / 2));
        const link = svg
            .append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(DATA.links)
            .enter()
            .append('line')
            .attr('stroke-width', (d) => {
            return Math.sqrt(d.value);
        });
        const node = svg
            .append('g')
            .attr('class', 'nodes')
            .selectAll('circle')
            .data(DATA.nodes)
            .enter()
            .append('circle')
            .attr('r', 5)
            .attr('fill', (d) => {
            return color(d.group);
        })
            .call(
        // @ts-expect-error How do we resolve types imported from static resources?
        d3
            .drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended));
        node.append('title').text((d) => {
            return d.id;
        });
        simulation.nodes(DATA.nodes).on('tick', ticked);
        simulation.force('link').links(DATA.links);
        function ticked() {
            link.attr('x1', (d) => d.source.x)
                .attr('y1', (d) => d.source.y)
                .attr('x2', (d) => d.target.x)
                .attr('y2', (d) => d.target.y);
            node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
        }
        function dragstarted(d) {
            // @ts-expect-error How do we resolve types imported from static resources?
            if (!d3.event.active) {
                simulation.alphaTarget(0.3).restart();
            }
            d.fx = d.x;
            d.fy = d.y;
        }
        function dragged(d) {
            // @ts-expect-error How do we resolve types imported from static resources?
            d.fx = d3.event.x;
            // @ts-expect-error How do we resolve types imported from static resources?
            d.fy = d3.event.y;
        }
        function dragended(d) {
            // @ts-expect-error How do we resolve types imported from static resources?
            if (!d3.event.active) {
                simulation.alphaTarget(0);
            }
            d.fx = null;
            d.fy = null;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlic0QzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlic0QzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7QUFDZixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDdkMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekU7Ozs7Ozs7OztHQVNHO0FBRUgsT0FBTyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUMsT0FBTyxJQUFJLE1BQU0sUUFBUSxDQUFDO0FBRTFCLDJGQUEyRjtBQUMzRixNQUFNLENBQUMsT0FBTyxPQUFPLE1BQU8sU0FBUSxnQkFBZ0I7SUFDaEQsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUNmLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFFaEIsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUV0QixLQUFLLENBQUMsZ0JBQWdCO1FBQ2xCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLE9BQU87UUFDWCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFFMUIsSUFBSSxDQUFDO1lBQ0QsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUNkLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLGVBQWUsQ0FBQztnQkFDdEMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsWUFBWSxDQUFDO2FBQ3JDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxhQUFhLENBQ2QsSUFBSSxjQUFjLENBQUM7Z0JBQ2YsS0FBSyxFQUFFLGtCQUFrQjtnQkFDekIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUN0QixPQUFPLEVBQUUsT0FBTzthQUNuQixDQUFDLENBQ0wsQ0FBQztRQUNOLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWTtRQUNSLHFGQUFxRjtRQUNyRiwyRUFBMkU7UUFDM0UsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzdELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDNUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM5QiwyRUFBMkU7UUFDM0UsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFOUMsMkVBQTJFO1FBQzNFLE1BQU0sVUFBVSxHQUFHLEVBQUU7YUFDaEIsZUFBZSxFQUFFO2FBQ2pCLEtBQUssQ0FDRixNQUFNO1FBQ04sMkVBQTJFO1FBQzNFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFlLEVBQUUsRUFBRTtZQUNsQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQ0w7WUFDRCwyRUFBMkU7YUFDMUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDcEMsMkVBQTJFO2FBQzFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVELE1BQU0sSUFBSSxHQUFHLEdBQUc7YUFDWCxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1gsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7YUFDdEIsU0FBUyxDQUFDLE1BQU0sQ0FBQzthQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNoQixLQUFLLEVBQUU7YUFDUCxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ2QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQXFCLEVBQUUsRUFBRTtZQUM1QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBRVAsTUFBTSxJQUFJLEdBQUcsR0FBRzthQUNYLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDWCxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQzthQUN0QixTQUFTLENBQUMsUUFBUSxDQUFDO2FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ2hCLEtBQUssRUFBRTthQUNQLE1BQU0sQ0FBQyxRQUFRLENBQUM7YUFDaEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDWixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBa0IsRUFBRSxFQUFFO1lBQ2pDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUM7YUFDRCxJQUFJO1FBQ0QsMkVBQTJFO1FBQzNFLEVBQUU7YUFDRyxJQUFJLEVBQUU7YUFDTixFQUFFLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQzthQUN4QixFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQzthQUNuQixFQUFFLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUM1QixDQUFDO1FBRU4sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFlLEVBQUUsRUFBRTtZQUMxQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRWhELFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUzQyxTQUFTLE1BQU07WUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQTJCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2lCQUN2RCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBMkIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7aUJBQ3ZELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUEyQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztpQkFDdkQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQTJCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakYsQ0FBQztRQUVELFNBQVMsV0FBVyxDQUFDLENBQXdDO1lBQ3pELDJFQUEyRTtZQUMzRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDbkIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxQyxDQUFDO1lBQ0QsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsQ0FBQztRQUVELFNBQVMsT0FBTyxDQUFDLENBQXdCO1lBQ3JDLDJFQUEyRTtZQUMzRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLDJFQUEyRTtZQUMzRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFFRCxTQUFTLFNBQVMsQ0FBQyxDQUF3QjtZQUN2QywyRUFBMkU7WUFDM0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ25CLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsQ0FBQztZQUNELENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ1osQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7Q0FDSiJ9