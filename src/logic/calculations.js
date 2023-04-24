import { addMinutes, subMinutes } from "date-fns";
import * as timeutils from "./timeUtils";

const sleepCycles = 6;

export function wakeUpAtTimes(time) {
    const arr = []
    let newTime = new Date(time);

    for (let i = 0; i < sleepCycles; i++) {
        newTime = subMinutes(time, 90)
        arr.push(`${newTime.getHours()}:${timeutils.fixMinutes(newTime.getMinutes())}`)
    }
    return arr.reverse()
}

export function goToSleepAtTimes(time) {
    const arr = [];
    let newTime = new Date(time);

    for (let i = 0; i < sleepCycles; i++) {
        newTime = addMinutes(newTime, 90)
        arr.push(`${newTime.getHours()}:${timeutils.fixMinutes(newTime.getMinutes())}`)
    }
    return arr.reverse()
}

export function powerNapUntil(time) {
    let newTime = new Date(time);

    /* Random nap duration between two numbers, since it's really pretty individual and doesn't matter a lot */
    const generateNapDuration = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    };

    const napDuration = generateNapDuration(25, 30);
    newTime = addMinutes(newTime, napDuration)

    /* Check if user wanted to nap past 7PM and warn them if that's the case */
    if (newTime.getHours() >= 19) {
        return ["", 0];
    }
    return [`${newTime.getHours()}:${timeutils.fixMinutes(newTime.getMinutes())}`, napDuration];
}
