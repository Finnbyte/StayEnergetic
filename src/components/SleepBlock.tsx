import { differenceInHours } from "date-fns";
import { useEffect, useState } from "react";
import { displayHours, displayMinutes } from "../logic/util";
import { TimeSelector } from "./TimeSelector";

//   <TimeSelector
//                onSelect={(e) => setHours(e.target.value)}
//                initial={hours}
//                options={[
//                    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
//                ]} />
//
//            <TimeSelector
//                onSelect={(e) => setMinutes(e.target.value)}
//                initial={minutes.toString()}
//                options={Array.from(Array(60).keys()).map((e) => e.toString().padStart(2, "0"))} />



function formatMsg(targetTime: Date, sleepTime: Date, index: number) {
    const hoursDifference = Math.abs(differenceInHours(targetTime, sleepTime));
    const severities = ["Suggested", "Avoid", "Dangerous"];
    const severity = severities[Math.floor(index / 2) % 3];

    return `${hoursDifference} hours of sleep [${severity}]`;
}

interface IProps {
    title: string
    calculator: (d: Date) => Date[]
}

export default function SleepBlock({ title, calculator }: IProps) {
    const [time, setTime] = useState<Date>(new Date());
    const [sleepTimes, setSleepTimes] = useState<Date[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        setSleepTimes(calculator(time));
    }, [time, calculator]);

    const handleModalSubmit = (time: Date) => {
        setShowModal(false)
        setTime(time)
    }

    return (
        <div className="flex justify-center items-center flex-col">
            <TimeSelector
                initial={time}
                show={showModal}
                onSubmit={handleModalSubmit}
                onClose={() => setShowModal(false)} />
            <h1 className="text-2xl whitespace-nowrap font-bold mb-3">
                {title}
                <span onClick={() => setShowModal(true)} className="bg-slate-700 cursor-pointer p-2 border-2 rounded-md border-slate-700">{displayHours(time)}:{displayMinutes(time)}</span>
            </h1>

            <ul>
                {sleepTimes.map((cycleTime, index) => {
                    const hours = displayHours(cycleTime);
                    const minutes = displayMinutes(cycleTime);
                    return <li key={index}>{`${hours}:${minutes} - ${formatMsg(time, cycleTime, index)}`}</li>;
                })}
            </ul>
        </div>
    )
}
