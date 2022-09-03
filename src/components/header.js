import React from 'react'

const Header = ({ setType, type }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Shudhanshu Raj</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`nav-link ${type === "Home" ? "active" : ""}`} aria-current="page" href="#" onClick={() => setType("Home")}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${type === "About" ? "active" : ""}`} href="#About" onClick={() => setType("About")}>About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={`nav-link ${type === "Portfolio" ? "active" : ""}`} href="#Portfolio" onClick={() => setType("Portfolio")}>Portfolio</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={`nav-link ${type === "Contact" ? "active" : ""}`} href="#Contact" onClick={() => setType("Contact")}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header