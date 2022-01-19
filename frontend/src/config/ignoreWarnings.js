const error = console.error;
function logError(...parameters) {
    let filter = parameters.find(parameter => {
        return (
            // Filter error because XXX
            parameter.includes("")
        );
    });
    if(!filter) error(...parameters);
}
console.error  = logError;

/*
parameter.includes("Warning: Legacy context API has been detected within a strict-mode tree.") ||
parameter.includes("Invalid prop `maxWidth` supplied to `ForwardRef(Container)`")
 */

const warn = console.warn;

function logWarning(...warnings){
    let showWarning = true;
    warnings.forEach(warning => {
        if (warning.includes("")) showWarning = false;
    });
    if(showWarning) warn(...warnings);
}
/*
if (warning.includes("UNSAFE_")) showWarning = false;
 */

console.warn  = logWarning;