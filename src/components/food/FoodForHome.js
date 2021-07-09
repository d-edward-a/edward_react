import React from "react";
import '../food/FoodForHome.css';

function FoodForHome() {
    function scrollToTravel() {
        document.getElementById("foodie").scrollIntoView({ behavior: "smooth" });
    }

    function scrollToTravel() {
        document.getElementById("travel-home").scrollIntoView({ behavior: "smooth" });
    }

    function changeColor() {
        document.getElementById("foodie").style.background = "#ffffff";
        document.getElementById("for-body").style.background = "#808080";
        document.getElementById("travel-home").style.opacity = "0.1";
        document.getElementById("my-profile").style.opacity = "0.1";
        document.getElementById("main-footer").style.opacity = "0.1";
    }

    function revertColor() {
        document.getElementById("foodie").style.background = "rgba(62, 182, 80, 0.05)";
        document.getElementById("for-body").style.background = "none";
        document.getElementById("travel-home").style.opacity = "1";
        document.getElementById("my-profile").style.opacity = "1";
        document.getElementById("main-footer").style.opacity = "1";
    }

    return (
        // <div className="foodie" id="foodie" onMouseOver={changeColor} onMouseOut={revertColor}>
            <div className="foodie" id="foodie">
            {/* <div className="foodie" id="foodie"> */}
            <div className="back-to-travel" onClick={scrollToTravel}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-chevron-double-up" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
                    <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                </svg>
            </div>
            <a href="/foodie">
                <div className="foodie-link">
                    <div id="arrowAnim">
                        <div className="eating">
                            &nbsp;...undulge
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <div className="arrowSliding">
                            <div className="arrow-food"></div>
                        </div>
                        <div className="arrowSliding delay1">
                            <div className="arrow-food"></div>
                        </div>
                        <div className="arrowSliding delay2">
                            <div className="arrow-food"></div>
                        </div>
                        <div className="arrowSliding delay3">
                            <div className="arrow-food"></div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default FoodForHome;
