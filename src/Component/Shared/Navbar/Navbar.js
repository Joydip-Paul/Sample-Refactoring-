import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="nav-area">
            <div class="navbar navbar-expand-lg shadow-custom">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Sample Refactoring</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                    </button>
                    <div class="collapse navbar-collapse position-relative" id="main_nav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link" href="Blog.html"> Home </a></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="#" data-bs-toggle="dropdown">Pages <i
                                    class="fas fa-chevron-down down-arrow-dropdown"></i></a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#"> Client</a></li>
                                    <li><a class="dropdown-item" href="#"> FAQ's </a></li>
                                    <li><a class="dropdown-item" href="#"> Testimonials </a></li>
                                </ul>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="Blog.html"> Blog </a></li>
                            <li class="nav-item"><a class="nav-link" href="About.html"> About </a></li>
                            <li class="nav-item"><a class="nav-link" href="Contact.html"> Contact </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;