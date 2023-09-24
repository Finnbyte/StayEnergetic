import Logo from "./components/Logo";
import { useEffect, useState } from "react";
import Checkbox from "./components/Checkbox";
import { goToSleepTimes, wakeUpTimes, napUntilTime } from "./logic/calculations";
import SleepBlock from "./components/SleepBlock";

//                    <nav>
//                        <ul className="flex flex-col space-y-5 text-center">
//                            <li><Link className="nav-link bg-stone-800" to={`/gotosleep`} replace={true}>When would you like to go to sleep?<span></span></Link></li>
//                            <li><Link className="nav-link" to={`/wakeup`} replace={true}>When would you like to wake up?<span></span></Link></li>
//                            <li><Link className="nav-link" to={`/nap`} replace={true}>When would you like to take a nap?<span></span></Link></li>
//                            <li><Link className="nav-link" to={`/information`} replace={true}>Information<span></span></Link></li>
//                        </ul>

enum Selection {
    BedTime,
    WakeUp,
    Nap
}

export function Layout() {
    const [selection, setSelection] = useState<Selection>(Selection.BedTime)

    const handleChange = (selected: Selection) => {
        setSelection(selected)
    }

    return (
        <div className="box-border h-screen font-display flex flex-col flex-grow justify-center items-center">
            <div className="mt-24 mb-12">
                <Logo />
            </div>
            <div className="flex md:container justify-center items-center p-2 border-2 border-slate-400 rounded-md">
                <Checkbox label="Sleep" onChange={() => handleChange(Selection.BedTime)} isChecked={selection === Selection.BedTime} />
                <Checkbox label="Wake up" onChange={() => handleChange(Selection.WakeUp)} isChecked={selection === Selection.WakeUp} />
                <Checkbox label="Nap" onChange={() => handleChange(Selection.Nap)} isChecked={selection === Selection.Nap} />
            </div>
            <div className="flex justify-center items-center text-white mx-4 p-5">
                <div>
                    {(() => {
                        switch (selection) {
                        case (Selection.BedTime): return <SleepBlock title={"If you were to go sleep at "} calculator={goToSleepTimes} />
                        case (Selection.WakeUp): return <SleepBlock title={"If you were to wake up at "} calculator={wakeUpTimes} />
                        case (Selection.Nap): return <SleepBlock title={"If you were to go nap at "} calculator={napUntilTime} />
                        }
                    })()}
                </div>
            </div>
            <footer className="text-white mx-8 bg-slate-800 w-screen h-[100px] mt-auto">
                <div className="container mx-auto flex flex-wrap justify-between">
                    <div className="w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0">
                        <h3 className="text-2xl font-bold mb-2">StayEnergetic</h3>
                        <p className="text-sm">An open-source project for maintaining energy and productivity.</p>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 mb-4 lg:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                        <ul className="text-sm">
                            <li><a href="https://github.com/Finnbyte/StayEnergetic" className="text-blue-400 hover:underline">GitHub Repository</a></li>
                            <li><a href="#" className="text-blue-400 hover:underline">Documentation</a></li>
                            <li><a href="#" className="text-blue-400 hover:underline">Contributing Guide</a></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3">
                        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                        <p className="text-sm">If you have any questions or suggestions, feel free to reach out:</p>
                        <ul className="text-sm">
                            <li>Email: <a href="mailto:contact@stayenergetic.com" className="text-blue-400 hover:underline">contact@stayenergetic.com</a></li>
                            <li>Twitter: <a href="https://twitter.com/StayEnergetic" className="text-blue-400 hover:underline">@StayEnergetic</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}
