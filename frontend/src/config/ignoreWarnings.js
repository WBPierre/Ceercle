const error = console.error;
function logError(...parameters) {
    let filter = parameters.find(parameter => {
        return (
            // Filter error because XXX
            parameter.includes("Warning: Legacy context API has been detected within a strict-mode tree.") ||
            parameter.includes("Invalid prop `maxWidth` supplied to `ForwardRef(Container)`") ||
            parameter.includes("Warning: %s is deprecated in StrictMode.")
        );
    });
    if(!filter) error(...parameters);
}
console.error  = logError;

/*

 */

const warn = console.warn;

function logWarning(...warnings){
    let showWarning = true;
    warnings.forEach(warning => {
        if (warning.includes("UNSAFE_")) showWarning = false;
        if (warning.includes("use moment.updateLocale")) showWarning = false;
    });
    if(showWarning) warn(...warnings);
}
/*

 */

console.warn  = logWarning;