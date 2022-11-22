import * as timeutils from "./timeUtils";

const sleepCycles = 6;

export function wakeUpAtTimes(time) {
    var arr = []
    let newTime = new Date(time);

    for (let i = 0; i < sleepCycles; i++) {
        newTime.setHours(newTime.getHours() - 1, newTime.getMinutes() - 30);
        arr.push(`${newTime.getHours()}:${timeutils.fixMinutes(newTime.getMinutes())}`)
    }
    return arr.reverse()
}

export function goToSleepAtTimes(time) {
    var arr = [];
    let newTime = new Date(time);

    for (let i = 0; i < sleepCycles; i++) {
        newTime.setHours(newTime.getHours() + 1, newTime.getMinutes() + 30);
        //const mins = time.getMinutes() - decreaseTime;
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
    newTime.setHours(newTime.getHours(), newTime.getMinutes() + napDuration);

    /* Check if user wanted to nap past 7PM and warn them if that's the case */
    if (newTime.getHours() >= 19) {
        return ["", 0];
    }
    return [`${newTime.getHours()}:${timeutils.fixMinutes(newTime.getMinutes())}`, napDuration];
}