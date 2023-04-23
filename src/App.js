/* Js */
import React, { useEffect, useState } from "react";
import CalcResults from "./components/CalcResults";
import * as timeutil from "./logic/timeUtils";
import ModeBlock from "./components/ModeBlock";
import * as default_states from "./defaults/mode_states";

/* CSS */
import "./css/App.css";
import "./css/Logo.css";
import Logo from "./components/Logo";

/* Controls whether or not results are shown */
const properValues = (h, m) => {
  if (h === "Hour" || m === "Minutes") return false
  return true
}

export default function App() {
  /* Modes */
  const [mode1, setMode1] = useState({
    mode: 1,
    hour: "Hour",
    minute: "Minutes",
    modifier: "AM",
    twentyFourHourTime: "",
    d: new Date(),
    buttonUsed: false,
    showResults: false
  });

  const [mode2, setMode2] = useState({
    mode: 2,
    hour: "Hour",
    minute: "Minutes",
    modifier: "PM",
    twentyFourHourTime: "",
    d: new Date(),
    buttonUsed: false,
    showResults: false
  });

  const [mode3, setMode3] = useState({
    mode: 3,
    hour: "Hour",
    minute: "Minutes",
    modifier: "PM",
    twentyFourHourTime: "",
    d: new Date(),
    buttonUsed: false,
    showResults: false
  });

  /* Keeping track of converted timestamps, used for calculating hours.*/
  /* Three useEffects for three modes. */
  useEffect(() => {
    setMode1(mode1 => ({...mode1, 
      twentyFourHourTime: timeutil.convertTo24hr(`${mode1.hour}:${mode1.minute} ${mode1.modifier}`), 
      showResults: properValues(mode1.hour, mode1.minute)}))
  }, [mode1.hour, mode1.minute, mode1.modifier]);

  useEffect(() => {
    setMode2(mode2 => ({...mode2, 
      twentyFourHourTime: timeutil.convertTo24hr(`${mode2.hour}:${mode2.minute} ${mode2.modifier}`), 
      showResults: properValues(mode2.hour, mode2.minute)}))
  }, [mode2.hour, mode2.minute, mode2.modifier]);

  useEffect(() => {
    setMode3(mode3 => ({...mode3, 
      twentyFourHourTime: timeutil.convertTo24hr(`${mode3.hour}:${mode3.minute} ${mode3.modifier}`), 
      showResults: properValues(mode3.hour, mode3.minute)}))
  }, [mode3.hour, mode3.minute, mode3.modifier]);


  return (
    <div className="App">
      <Logo/>
      <div className="modeBlock">
        <div className="mode1">
          <ModeBlock defModeValues={default_states.defMode1} modeValues={mode1} setModeValues={setMode1} labels={
            {hour: "When would you like to wake up?", minute: "", modifier: ""}
          }/>
          {mode1.showResults ? <CalcResults mode={1} twentyFourHourTime={mode1.twentyFourHourTime}/> : null}
        </div>

        <div className="mode2">
          <ModeBlock defModeValues={default_states.defMode2} modeValues={mode2} setModeValues={setMode2} labels={
            {hour: "When would you like to fall asleep?", minute: "", modifier: ""}
          }/>
          {mode2.showResults ? <CalcResults mode={2} twentyFourHourTime={mode2.twentyFourHourTime}/> : null}
        </div>

        <div className="mode3">
          <ModeBlock defModeValues={default_states.defMode3} modeValues={mode3} setModeValues={setMode3} labels={
            {hour: "When would you want to take a nap:", minute: "", modifier: ""}
          }/>
          {mode3.showResults ? <CalcResults mode={3} twentyFourHourTime={mode3.twentyFourHourTime}/> : null}
        </div>


        <div className="infoBox">
          <h3>Information</h3>
          <p>
            StayEnergetic improves the <span className="important">quality</span> and <span className="important">duration</span> of your sleep by telling you when you should wake up or go to sleep. Not only does that lead to better quality sleep, it also encourages you to go to bed earlier.
            It will also help in determining your nap lengths!
            <br/><br/>

            StayEnergetic works by giving you 6 times, each tied to it's own sleep cycle. <span className="important">One sleep cycle lasts for about 90 minutes.</span> If you wake up during a cycle, <span className="important"> you will feel more tired during the day</span>.
            <br/><br/>
          </p>
          <h3 style={{textAlign: "left"}}>Readings about the harmfulness of waking up during REM:</h3>
          <ul>
            <li><a href="https://www.sleepfoundation.org/stages-of-sleep">https://www.sleepfoundation.org/stages-of-sleep</a></li>
            <li><a href="https://immramainstitute.com/sleeping/what-happens-if-you-wake-up-during-rem-sleep">https://immramainstitute.com/sleeping/what-happens-if-you-wake-up-during-rem-sleep</a></li>
            <li><a href="https://aasm.org/awakening-during-rem-sleep-results-in-negative-mood-and-self-appraisal/">https://aasm.org/awakening-during-rem-sleep-results-in-negative-mood-and-self-appraisal/</a></li>
          </ul>
          <h3 style={{textAlign: "left"}}>About the project</h3>
          <p>
            This project was made by <a href="https://www.github.com/finnbyte">this guy</a> and was made as a final project for a React class at TAI.
            <br/>
	    I had genuine need for a website like this, but most already existing webpages were filled with ads and other junk. So I made my own!

	    <br/><br/>

            Links for this project:<br/>
            <span style={{paddingLeft: "2vw"}}>Repo: <a href="https://www.github.com/finnbyte/stayenergetic">StayEnergetic</a> over at Github.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
