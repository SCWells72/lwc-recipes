/**
 * Reduces one or more LDS errors into a string[] of error messages.
 * @param errors
 * @return Error messages
 */
export function reduceErrors(errors) {
    if (!Array.isArray(errors)) {
        errors = [errors];
    }
    return (errors
        // Remove null/undefined items
        .filter((error) => !!error)
        // Extract an error message
        .map((error) => {
        // UI API read errors
        if (Array.isArray(error.body)) {
            return error.body.map((e) => e.message);
        }
        // Page level errors
        else if (error?.body?.pageErrors &&
            error.body.pageErrors.length > 0) {
            return error.body.pageErrors.map((e) => e.message);
        }
        // Field level errors
        else if (error?.body?.fieldErrors &&
            Object.keys(error.body.fieldErrors).length > 0) {
            const fieldErrors = [];
            Object.values(error.body.fieldErrors).forEach((errorArray) => {
                fieldErrors.push(...errorArray.map((e) => e.message));
            });
            return fieldErrors;
        }
        // UI API DML page level errors
        else if (error?.body?.output?.errors &&
            error.body.output.errors.length > 0) {
            return error.body.output.errors.map((e) => e.message);
        }
        // UI API DML field level errors
        else if (error?.body?.output?.fieldErrors &&
            Object.keys(error.body.output.fieldErrors).length > 0) {
            const fieldErrors = [];
            Object.values(error.body.output.fieldErrors).forEach((errorArray) => {
                fieldErrors.push(...errorArray.map((e) => e.message));
            });
            return fieldErrors;
        }
        // UI API DML, Apex and network errors
        else if (error.body && typeof error.body.message === 'string') {
            return error.body.message;
        }
        // JS errors
        else if (typeof error.message === 'string') {
            return error.message;
        }
        // Unknown error shape so try HTTP status text
        return error.statusText;
    })
        // Flatten
        .reduce((prev, curr) => prev.concat(curr), [])
        // Remove empty strings
        .filter((message) => !!message));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGRzVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsZHNVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLFlBQVksQ0FBQyxNQUFXO0lBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDekIsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELE9BQU8sQ0FDSCxNQUFNO1FBQ0YsOEJBQThCO1NBQzdCLE1BQU0sQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNoQywyQkFBMkI7U0FDMUIsR0FBRyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7UUFDaEIscUJBQXFCO1FBQ3JCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUM1QixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUNELG9CQUFvQjthQUNmLElBQ0QsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVO1lBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ2xDLENBQUM7WUFDQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFDRCxxQkFBcUI7YUFDaEIsSUFDRCxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVc7WUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FB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