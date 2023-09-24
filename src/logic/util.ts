import { parse } from "date-fns";

export const getRandNumBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1));
}

export const parseFromHoursAndMins = (hours: string, minutes: string) => {
    return parse(`${hours}:${minutes}`, "HH:mm", new Date());
}

export const displayMinutes = (time: Date) => {
    return time.getMinutes().toString().padStart(2, "0")
}

export const displayHours = (time: Date) => {
    return time.getHours().toString()
}
