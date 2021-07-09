import React from "react";
import "../profile/ProfileForHome.css";
import Typical from "react-typical";
import Images from "../gallery/Images";
import zh from "../../images/Zurich.jpg";
import { Container, Row, Col } from "react-bootstrap";

function ProfileForHome() {
    const images = Images;
    const randomImages = randomizeIMGArray(images);
    const image = randomImages[0];

    function randomizeIMGArray(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    function changeColor() {
        document.getElementById("my-profile").style.background = "#ffffff";
        document.getElementById("for-body").style.background = "#808080";
        document.getElementById("travel-home").style.opacity = "0.1";
        document.getElementById("foodie").style.opacity = "0.1";
        document.getElementById("main-footer").style.opacity = "0.1";
    }

    function revertColor() {
        document.getElementById("my-profile").style.background = "rgba(15, 37, 87, 0.05)";
        document.getElementById("for-body").style.background = "none";
        document.getElementById("travel-home").style.opacity = "1";
        document.getElementById("foodie").style.opacity = "1";
        document.getElementById("main-footer").style.opacity = "1";
    }

    function scrollToTravel() {
        document.getElementById("travel-home").scrollIntoView({ behavior: "smooth" });
    }

    return (
        // <div className="my-profile" id="my-profile" onMouseOver={changeColor} onMouseOut={revertColor}>
        <div id="top-profile">
            <div className="my-profile" id="my-profile" style={{ backgroundImage: `url(${zh})` }}>
                <div className="text-animation">
                    <span className="first-name">Donn</span>
                    <br />
                    <span className="second-name">Edward</span>
                    <br />
                    <span className="last-name">Anin</span>
                    <br />
                    <br />
                    <span className="texts">
                        I love
                        <Typical
                            className="details"
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                " traveling.",
                                2000,
                                " coding.",
                                2000,
                                " food.",
                                2000,
                                " doing sports.",
                                2000
                            ]} />
                    </span>
                    <br />
                    <span className="location">Zurich based.</span>
                </div>
                <a href="/profile">
                    <div className="profile-link">
                        <div id="arrowAnim">
                            <div className="know-me">
                                &nbsp;...get to know me
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className="arrowSliding">
                                <div className="arrow-profile"></div>
                            </div>
                            <div className="arrowSliding delay1">
                                <div className="arrow-profile"></div>
                            </div>
                            <div className="arrowSliding delay2">
                                <div className="arrow-profile"></div>
                            </div>
                            <div className="arrowSliding delay3">
                                <div className="arrow-profile"></div>
                            </div>
                        </div>
                    </div>
                </a>
                <div className="to-travel" onClick={scrollToTravel}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-chevron-double-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default ProfileForHome;
