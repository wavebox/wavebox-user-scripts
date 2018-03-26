// Set here the time you want as reload interval.
interval = {
    hours: 0,
    minutes: 5,
    seconds: 0,
}

/*
*** Don't change anything bellow this point, unless you know what you are doing. ***
*/
const scriptName = 'all-reload-periodically';

console.debug(`${scriptName} - Starting with the interval object: ${JSON.stringify(interval)}`);

function getMilliseconds(arg) {
    const ms = ((arg.hours * 60 * 60 + arg.minutes * 60 + arg.seconds) * 1000);
    console.debug(`${scriptName} - Based on interval object "${JSON.stringify(interval)}" the following milliseconds where calculated: ${ms}`);
    return ms;
}

const startReload = () => {
    setTimeout(() => {
        console.debug('Reloading...');
        location.reload();
    }, getMilliseconds(interval))
};

startReload();