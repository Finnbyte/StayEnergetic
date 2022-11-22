import "../css/ModesAndInfo.css";
import * as timeutils from "../logic/timeUtils";

export default function ModeBlock(props) {
    const handleNowButton = (e) => {
        if (!props.modeValues.buttonUsed) { /* Toggles button */
            /* Convert Date-objects 24 hour format to 12 hour format. */
            const currentTime = new Date();
            const [_hr, _minutes, _mod] = timeutils.slice12HrString(currentTime.toLocaleTimeString("en-US", {hour12: true, timeStyle: "short"}));

            props.setModeValues({...props.modeValues, hour: _hr, minute: _minutes, 
                modifier: _mod, buttonUsed: true});
        }
    }

    const handleOnChange = (e) => {
        props.setModeValues({...props.modeValues, [e.target.name]: e.target.value, buttonUsed: false});
    }

    const handleClearButton = () => {
        /* Clears hour and minute of modeValues */
        if (props.modeValues.hour !== "Hour" && props.modeValues.minute !== "Minutes") {
            props.setModeValues({...props.defModeValues, hour: props.defModeValues.hour, minute: props.defModeValues.minute});
        }
    }

    /* Makes selects work well with the Clear button. */
    const checks = {
        hour: props.modeValues.buttonUsed ? props.defModeValues.hour : props.modeValues.hour,
        min: props.modeValues.buttonUsed ? props.defModeValues.minute : props.modeValues.minute,
        mod: props.modeValues.buttonUsed ? props.defModeValues.modifier : props.modeValues.modifier
    }

    return (
        <>
        <label>
            {props.labels.hour}
        </label>
        <select name="hour" value={checks.hour} onChange={handleOnChange}> 
            <option>Hour</option>
            <option value="01">1</option>
            <option value="02">2</option>
            <option value="03">3</option>
            <option value="04">4</option>
            <option value="05">5</option>
            <option value="06">6</option>
            <option value="07">7</option>
            <option value="08">8</option>
            <option value="09">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
        </select>


        <label>
            {props.labels.minute}
        </label>
        <select name="minute" value={checks.min} onChange={handleOnChange}> 
            <option>Minute</option>
            <option value="00">00</option>
            <option value="05">05</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
            <option value="50">50</option>
            <option value="55">55</option>
        </select>

        <label>
            {props.labels.modifier}
        </label>
        <select name="modifier" value={checks.mod} onChange={handleOnChange}> 
            <option value="AM">AM</option>
            <option value="PM">PM</option>
        </select>

        <div className="timeNowButton">
            <button disabled={props.modeValues.buttonUsed} onClick={handleNowButton}>
                {props.modeValues.buttonUsed ? `Now (${props.modeValues.twentyFourHourTime})` : "Now"} {/* Show current time on button if pressed */} 
            </button>
        </div>
        <div id="clearButton">
            <button onClick={handleClearButton}>Clear</button>
        </div>
        </>
    )
}