import React, { useEffect, useState } from "react";
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = React.useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
    let navbarClasses = ["header-area", "fixed-top"];
    if (scrolled) {
        navbarClasses.push("scrolled");
    }
    return (
        <nav className={navbarClasses.join(" ")}>
            <div className="navbar navbar-expand-lg container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Sample Refactoring</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                    </button>
                    <div className="collapse navbar-collapse position-relative" id="main_nav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="Blog.html"> Home </a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" data-bs-toggle="dropdown">Pages <i
                                    className="fas fa-chevron-down down-arrow-dropdown"></i></a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"> Our Story</a></li>
                                    <li><a className="dropdown-item" href="#"> FAQ's </a></li>
                                    <li><a className="dropdown-item" href="#"> Payment </a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="Blog.html"> Design Gallery </a></li>
                            <li className="nav-item"><a className="nav-link" href="About.html"> How it works </a></li>
                            <li className="nav-item"><a className="nav-link" href="/contact"> Contact </a></li>
                            <li className="nav-item"><a className="nav-link" href="/book-appointment"> Book Appointment </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;