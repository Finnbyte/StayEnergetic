export default function Logo() {
    return (
        <>
        <div className='logo-container'>
            <span>StayEnergetic</span>
            <img src={process.env.PUBLIC_URL + "/moon.png"} className="App-logo" alt="Logo of this website project"/>
        </div>
        <span>
            <br></br>
            <br></br>
        </span>
        </>
    )
}
