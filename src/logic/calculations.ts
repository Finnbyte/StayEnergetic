import { addMinutes, subMinutes } from "date-fns";
import { getRandNumBetween } from "./util";

const sleepCycles = [6, 5, 4, 3, 2, 1]

export function goToSleepTimes(date: Date) {
    return [...sleepCycles].map(n => addMinutes(date, n * 90))
}

export function wakeUpTimes(date: Date) {
    return [...sleepCycles].map((n) => subMinutes(date, n * 90))
}

export function napUntilTime(date: Date) {
    return [addMinutes(date, getRandNumBetween(15, 26))]
}
