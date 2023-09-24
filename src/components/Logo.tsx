function MoonEmoji() {
    return (
        <span>🌙</span>
    )
}

export default function Logo() {
    return (
        <div className="inline-flex relative text-white text-center">
            <h1 className="text-5xl font-bold my-5 px-12">StayEnergetic</h1>
            <span className="absolute text-4xl right-0 top-0"><MoonEmoji /> </span>
        </div>
    )
}
