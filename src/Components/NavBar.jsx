import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="container">
            <header id="site-header" className="fixed-top">
                <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
                    <h1>
                        <Link
                            style={{ paddingLeft: "20px" }}
                            className="navbar-brand pe-xl-5 pe-lg-4 "
                            to="/"
                        >
                            INFO<span className="sublog">LABZ</span>
                        </Link>
                    </h1>
                    <button
                        className="navbar-toggler collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                        <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-lg-auto my-2  my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    National
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/business" className="nav-link">
                                    Business
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sports" className="nav-link">
                                    Sports
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/world" className="nav-link">
                                    World
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/politics" className="nav-link">
                                    Politics
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/technology" className="nav-link">
                                    Technology
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/startup" className="nav-link">
                                    Startup
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/entertainment" className="nav-link">
                                    Entertainment
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/miscellaneous" className="nav-link">
                                    Miscellaneous
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/science" className="nav-link">
                                    Science
                                </Link>
                            </li>
                        </ul>
                        <div className="mobile-position">
                            <nav className="navigation">
                                <div className="theme-switch-wrapper">
                                    <label className="theme-switch" htmlFor="checkbox">
                                        <input type="checkbox" id="checkbox" />
                                        <div className="mode-container">
                                            <i className="gg-sun"></i>
                                            <i className="gg-moon"></i>
                                        </div>
                                    </label>
                                </div>
                            </nav>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default NavBar;
