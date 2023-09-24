import { MouseEventHandler, useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import { displayHours, displayMinutes } from "../logic/util";
import { addHours, addMinutes, subHours, subMinutes } from "date-fns";

interface ITimeSelectorProps {
    initial: Date
    show: boolean
    onSubmit: (time: Date) => void
    onClose: () => void
}

//        <select value={initial} onChange={onSelect}>
//                {options.map(item => {
//                    return <option key={item} value={item}>{item}</option>
//                })}

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
}


export function TimeSelector({ initial, show, onSubmit, onClose }: ITimeSelectorProps) {
    const [time, setTime] = useState<Date>(initial)

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as Element;
        if (target.id !== "outer") return

        console.log(target)
        
        onClose()
    }

    return (
        <div onClick={handleClick} id="outer" className={`${show ? "block" : "hidden"} flex flex-col justify-center items-center fixed w-screen h-screen backdrop-blur-sm`}>
            <section id="section" className="fixed bg-slate-600 w-[30%] h-[30%] flex flex-col justify-between items-center rounded-md border-2">
                <h1 className="text-2xl">Set time</h1>

                <div className="flex gap-2 items-center [&>.chevron]:pointer">
                    <div className="flex flex-col items-center gap-2">
                        <ChevronUp className="chevron" onClick={() => setTime(addHours(time, 1))} />
                        <div className="border-2 rounded-md p-3 text-center">
                            <span className="text-center">
                                {displayHours(time)}
                            </span>
                        </div>
                        <ChevronDown className="chevron" onClick={() => setTime(subHours(time, 1))} />
                    </div>
                    <h2 className="text-3xl">:</h2>
                    <div className="flex flex-col items-center gap-2">
                        <ChevronUp className="chevron" onClick={() => setTime(addMinutes(time, 1))} />
                        <div className="border-2 rounded-md p-3 text-center">
                            <span>
                                {displayMinutes(time)}
                            </span>
                        </div>
                        <ChevronDown className="chevron" onClick={() => setTime(subMinutes(time, 1))} />
                    </div>
                </div>

                <div className="flex gap-2">
                    <button onClick={() => onSubmit(time)}>Submit</button>
                    <button onClick={onClose}>close</button>
                </div>
            </section>
        </div>
    )
}
