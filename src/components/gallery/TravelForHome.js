import React from "react";
import '../gallery/TravelForHome.css';
import Images from "./Images";

function TravelForHome() {
    const images = Images;
    const randomImages = randomizeIMGArray(images);
    const image1 = randomImages[0];
    const image2 = randomImages[1];

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

    function scrollToFood() {
        document.getElementById("foodie").scrollIntoView({ behavior: "smooth" });
    }

    function scrollToProfile() {
        document.getElementById("navbar").scrollIntoView({ behavior: "smooth" });
    }

    // function changeColor() {
    //     document.getElementById("for-body").style.background = "#808080";
    //     document.getElementById("my-profile").style.opacity = "0.1";
    //     document.getElementById("foodie").style.opacity = "0.1";
    //     document.getElementById("main-footer").style.opacity = "0.1";
    // }

    // function revertColor() {
    //     document.getElementById("for-body").style.background = "none";
    //     document.getElementById("my-profile").style.opacity = "1";
    //     document.getElementById("foodie").style.opacity = "1";
    //     document.getElementById("main-footer").style.opacity = "1";
    // }

    return (
        // <div className="travel-home" id="travel-home" onMouseOver={changeColor} onMouseOut={revertColor}>
        <div className="travel-home" id="travel-home">
            <div className="back-to-profile" onClick={scrollToProfile}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-chevron-double-up" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
                    <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                </svg>
            </div>
            <img className="image-size" src={image1.thumbnail} alt="Travel" />
            <div className="travel-info">
                <div className="text-description">
                    Discover some pictures I took from travelling to different countries.
                </div>
                <a href="/travel">
                    <div className="travel-link">
                        <div className="hop-on">
                            ...discover
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <div className="arrowSliding">
                            <div className="arrow-travel"></div>
                        </div>
                        <div className="arrowSliding delay1">
                            <div className="arrow-travel"></div>
                        </div>
                        <div className="arrowSliding delay2">
                            <div className="arrow-travel"></div>
                        </div>
                        <div className="arrowSliding delay3">
                            <div className="arrow-travel"></div>
                        </div>
                    </div>
                </a>
            </div>
            <img className="image-size" src={image2.thumbnail} alt="Travel" />
            <div className="to-food" onClick={scrollToFood}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-chevron-double-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
            </div>
        </div>
    )
}

export default TravelForHome;
