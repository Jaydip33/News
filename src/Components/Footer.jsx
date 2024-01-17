import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className=" bg-light text-dark">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                            omnis non! Eaque ex est totam excepturi modi reprehenderit
                            quibusdam pariatur, aperiam placeat?
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <div className="row">
                            <div className="col-sm-6">
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
                                </ul>
                            </div>
                            <div className="col-sm-6">
                                <ul className="navbar-nav me-lg-auto my-2  my-lg-0 navbar-nav-scroll">
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
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <address>
                            Infolabz
                            <br />
                            Navranpura
                            <br />
                            india
                            <br />
                            <a href="mailto:info@example.com">jaydip123@gmail.com</a>
                            <br />
                            <a href="tel:+1234567890">+91 9988776655</a>
                        </address>
                    </div>
                </div>
                <hr />
                <div className="text-center">
                    <p>&copy; 2024 Your News Website. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
