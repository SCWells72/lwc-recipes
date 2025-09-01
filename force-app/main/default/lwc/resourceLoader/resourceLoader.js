// noinspection JSUnusedGlobalSymbols,ParameterNamingConventionJS,JSDeprecatedSymbols
/**
 * Utility function to load a JS file via a script tag.
 *
 * This workaround is implemented to get around a limitation of the Lightning Locker library in LWR sites.
 * Read more about it in the "Lightning Locker Limitations" section of the documentation
 * https://developer.salesforce.com/docs/atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_limitations.htm
 */
export function loadScript(_ctx, url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.charset = 'utf-8';
        script.type = 'text/javascript';
        document.head.appendChild(script);
        script.addEventListener('load', resolve);
        script.addEventListener('error', reject);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VMb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXNvdXJjZUxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRkFBcUY7QUFFckY7Ozs7OztHQU1HO0FBQ0gsTUFBTSxVQUFVLFVBQVUsQ0FBQyxJQUFTLEVBQUUsR0FBVztJQUM3QyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ25DLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFzQixDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7UUFDaEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyJ9
