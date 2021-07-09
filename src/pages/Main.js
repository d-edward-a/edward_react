import React from "react";
import "../css/index.css";
import logo from "../images/logo.png";
import {Col, Container, Image, Media, Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {withRouter} from "react-router-dom";

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
                <Row className="justify-content-center">
                    <Col sm={"auto"} className="animateHeader">
                        <Media>
                            <Image
                                className="logo img-fluid"
                                width={450}
                                src={logo}
                                alt="Edward"
                                fluid="md"
                                onClick={() => {
                                    this.toMain();
                                }}
                            />
                        </Media>
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row className="profileLink" onClick={() => {
                    this.toProfile();
                }}>
                    <Col md={{span: 2.5, offset: 4}}>
                        Profile
                    </Col>
                </Row>
                <br/>
                <Row className="travelLink" onClick={() => {
                    this.toTravel();
                }}>
                    <Col md={{span: 2.5, offset: 7}}>
                        Travel
                    </Col>
                </Row>
                <br/>
                <Row className="bitesLink" onClick={() => {
                    this.toBites();
                }}>
                    <Col md={{span: 1.5, offset: 5}}>
                        Bites
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(Main);
