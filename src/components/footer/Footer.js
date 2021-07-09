import React from "react";
import '../footer/Footer.css'

function Footer() {
    return (
        <div className="main-footer" id="main-footer">
            <div className="container">
                <div className="footer-row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Donn Edward Anin | All rights reserved | <a href="/disclaimer">Disclaimer</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
