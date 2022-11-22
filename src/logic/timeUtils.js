export function convertTo24hr(timeStr) {
    const [time, modifier]  = timeStr.split(" ");
    let [hr, min] = time.split(":");

    if (hr === "12") {
        hr = "00";
    }

    if (modifier === "PM") {
        hr = parseInt(hr, 10) + 12;
    }

    return `${hr}:${min}`;
}

export function get24hrHour(timeStr) {
    return `${timeStr.split(":")[0]}`;
}

export function get24hrMin(timeStr) {
    return `${timeStr.split(":")[1]}`;
}

/* Minutes supplied by getMinutes() are only 1 digit, this makes them 2. */
export function fixMinutes(minute) {
    return minute.toString().padStart(2, '0');
}

export function slice12HrString(timeStr) {
    const [hr, min] = [timeStr.split(":")[0], timeStr.split(":")[1]];
    const mod = min.split(" ")[1];
    return [hr, min, mod];

}