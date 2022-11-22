import logoImg from "../moon.png";

export default function Logo() {
    return (
        <>
        <div className='logo-container'>
            <span>StayEnergetic</span>
            <img src={logoImg} className="App-logo" alt="Logo of this website project"/>
        </div>
        <span>
            <br></br>
            <br></br>
        </span>
        </>
    )
}