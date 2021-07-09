import React from "react";
import "../css/index.css";
import {Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {withRouter} from "react-router-dom";
import Navbar from "./Navbar";

class Main extends React.Component {
    toMain() {
        this.props.history.push("/");
    }

    toProfile() {
        localStorage.setItem("pageType", "profile");
        this.props.history.push("/personal");
    }

    toTravel() {
        localStorage.setItem("pageType", "travel");
        this.props.history.push("/personal");
    }

    toBites() {
        localStorage.setItem("pageType", "bites");
        this.props.history.push("/personal");
    }

    render() {
        return (
            <Container fluid>
                <Navbar/>
            </Container>
        );
    }
}

export default withRouter(Main);
