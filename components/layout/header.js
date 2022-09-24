import React from 'react';

const Header = () => {

    if (typeof window !== "undefined") {
    let lastScrollpos = window.pageYOffset;
    let menuButtonCheck = document.querySelector(".menu-btn");
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (lastScrollpos > currentScrollPos) {
            document.getElementById("top-nav").style.top = "0";
        } else {
            document.getElementById("top-nav").style.top = "-75px";
        }
        lastScrollpos = currentScrollPos;
        menuButtonCheck.checked = false;
        } 
    } 
    return (
        <div>
            <nav class="top-nav" id="top-nav">
                <a href="#" class="logo">Company Logo</a>
                <input class="menu-btn" type="checkbox" id="menu-btn" />
                <label class="menu-icon" htmlFor="menu-btn"><span class="navicon"></span></label>
                <ul class="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;