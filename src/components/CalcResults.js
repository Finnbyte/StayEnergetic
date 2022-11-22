import React from "react";
import * as timeutil from "../logic/timeUtils";
import * as calculations from "../logic/calculations";

const sleepAmounts = [
    "9 hours of sleep",
    "7.5 hours of sleep",
    "6 hours of sleep",
    "4.5 hours of sleep",
    "3 hours of sleep",
    "1.5 hours of sleep"
]

function ResultLine({elem, index}) {
    return (
        <span className="resultElem" key={elem}>{elem} - {sleepAmounts[index]} {
            /* Based on index, tell user how much this "current" sleep amount impacts health */
            index < 2 ? <span>[<span className="suggested">Suggested</span>]</span> 
            : index > 3 ? <span>[<span className="dangerous">Dangerous</span>]</span> 
            : index > 1 && index < 4 ? <span>[<span className="warning">Avoid if possible</span>]</span> 
            : null
        }</span>
    )
}

export default function CalcResults(props) {
    /* Create new Date-object and set it's hours to be what user selected */
    let timeObj = new Date();
    timeObj.setHours(timeutil.get24hrHour(props.twentyFourHourTime), timeutil.get24hrMin(props.twentyFourHourTime));

    const m1Results = calculations.wakeUpAtTimes(timeObj);
    const m2Results = calculations.goToSleepAtTimes(timeObj);
    const [m3Results, napDuration] = calculations.powerNapUntil(timeObj);

    /* Render a block depending on which mode was an argument for this component */
    switch (props.mode) {
        case 1: 
            return (
                <>
                <h3>You should go to sleep at: </h3>
                {m1Results.map((elem, index) => (
                    <ResultLine elem={elem} index={index}/>
                ))}
                </>
            );
        case 2:
            return (
                <>
                <h3>You should wake up at: </h3>
                {m2Results.map((elem, index) => (
                    <ResultLine elem={elem} index={index}/>
                ))}
                </>
            );
        case 3:
            return (
                <>
                {napDuration === 0 ? <h3>Hey, I can't allow this...</h3> : <h3>You should take a nap until:</h3>}
                {
                    napDuration === 0 ? <span className="napResult">
                        You shouldn't nap at a time like this! It negatively impacts your sleep routine and I want you to stay energetic. 😊
                    </span> 
                    : <span className="napResult">{m3Results} - <span className="suggested">{napDuration} minutes</span> of napping.</span>
                }
                </>
            )

        default: return null // Nothing to render here
    }
}