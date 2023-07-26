import '../App.css'

function Nav(){
    return (
        <div className="nav">
            <div className="logo">
            <img src="/images/brand_logo.png" alt="logo" />
            </div>
            <ul className="nav-list">
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
            <button className="login-btn">
                Login
            </button>
        </div>
    )
}

export default Nav;