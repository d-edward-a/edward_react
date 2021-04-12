import React from "react";
import "../css/index.css";
import logo from "../images/logo.png";
import {Button, Col, Container, Image, Media, Nav, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {withRouter} from "react-router-dom";
import Gallery from "react-lightbox-component";
import images from "./lightbox-component";
import "react-lightbox-component/build/css/index.css"

class Personal extends React.Component {
    state = {
        pageType: localStorage.getItem("pageType"),
        recipe: null
    };

    toMain() {
        this.props.history.push("/");
        this.setState({ pageType: null });
        this.setState({ recipe: null });
    }

    updateProfile() {
        this.setState({ pageType: "profile" });
        this.setState({ recipe: null });
        localStorage.setItem("pageType", "profile");
    }

    updateTravel() {
        this.setState({ pageType: "travel" });
        this.setState({ recipe: null });
        localStorage.setItem("pageType", "travel");
    }

    updateBites() {
        this.setState({ pageType: "bites" });
        this.setState({ recipe: null });
        localStorage.setItem("pageType", "bites");
    }

    updateResources() {
        this.setState({ pageType: "resources" });
        this.setState({ recipe: null });
        localStorage.setItem("pageType", "resources");
    }

    randomizeIMGArray(array) {
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

    loadGallery() {

    }

    renderRecipe(recipe) {
        if (recipe === "Apple Pie") {
            return (
                <Container className="animateBody">
                    <Row className="justify-content-center recipe">
                        <h3>Apple Pie</h3>
                    </Row>
                    <Row className="justify-content-center recipeDetails">
                        <Col xs="3">
                            <h5>Ingredients</h5>
                            <h6>Pie Dough</h6>
                            <ul className="listAlignment">
                                <li>315 g all-purpose flour</li>
                                <li>1 tsp salt</li>
                                <li>113 g unsalted butter (cold & cubed)</li>
                                <li>8 tbsp ice cold water</li>
                            </ul>
                            <h6>Filling</h6>
                            <ul>
                                <li>~1 kg Granny Smith apple</li>
                                <li>150 g granulated sugar</li>
                                <li>2 tbsp all-purpose flour</li>
                                <li>1/2 tsp salt</li>
                                <li>1 tsp cinnamon</li>
                                <li>1/4 tsp nutmeg</li>
                                <li>1/2 lemon</li>
                                <li>1 egg, beaten</li>
                            </ul>
                        </Col>
                        <Col xs="6">
                            <h5>Instructions</h5>
                            <ol start="1">
                                <li>Preheat the oven to 200&#8451;.</li>
                                <li>Mix flour and salt in a bowl. Break butter in the mixture using fork.</li>
                                <li>Slowly add water. Continue mixing until mixture and water comes together.</li>
                                <li>Work the dough together, form it into a ball and wrap in cling wrap. Refrigerate while preparing the filling.</li>
                                <li>Peel apples and slice.</li>
                                <li>In a separate bowl, mix sliced apples, sugar, flour, salt, cinnamon, nutmeg, and lemon.</li>
                                <li>On a flat floured surface, roll half of the dough using a rolling pin. Once flat (~3 mm), transfer it in the pie dish. Remove extra dough on the edges.</li>
                                <li>Pour apple mixture. Flatten the other half of the dough (same thickness) and put it on top of the pie dish covering the apple mixture.</li>
                                <li>Seal the edges and brush the top with the beaten egg. Cut small slits on top of the pie.</li>
                                <li>Bake for 50-60 minutes. Allow it to cool completely before slicing.</li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            );
        }
        else if (recipe === "Black Forest Cake (Schwarzwälder Kirschtorte)") {
            return (
                <Container className="animateBody">
                    <Row className="justify-content-center recipe">
                        <h3>Black Forest Cake (Schwarzwälder Kirschtorte)</h3>
                    </Row>
                    <Row className="justify-content-center recipeDetails">
                        <Col xs="3">
                            <h5>Ingredients</h5>
                        </Col>
                        <Col xs="6">
                            <h5>Instructions</h5>
                            <ol start="1">
                                <li></li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            );
        }
        else if (recipe === "Butterscotch Bars") {
            return (
                <Container className="animateBody">
                    <Row className="justify-content-center recipe">
                        <h3>Butterscotch Bars</h3>
                    </Row>
                    <Row className="justify-content-center recipeDetails">
                        <Col xs="3">
                            <h5>Ingredients</h5>
                        </Col>
                        <Col xs="6">
                            <h5>Instructions</h5>
                            <ol start="1">
                                <li></li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            );
        }
        else if (recipe === "Chocolate Cake") {
            return (
                <Container className="animateBody">
                    <Row className="justify-content-center recipe">
                        <h3>Chocolate Cake</h3>
                    </Row>
                    <Row className="justify-content-center recipeDetails">
                        <Col xs="3">
                            <h5>Ingredients</h5>
                        </Col>
                        <Col xs="6">
                            <h5>Instructions</h5>
                            <ol start="1">
                                <li></li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            );
        }
        else if (recipe === "Chocolate Lava Cake") {
            return (
                <Container className="animateBody">
                    <Row className="justify-content-center recipe">
                        <h3>Chocolate Lava Cake</h3>
                    </Row>
                    <Row className="justify-content-center recipeDetails">
                        <Col xs="3">
                            <h5>Ingredients</h5>
                        </Col>
                        <Col xs="6">
                            <h5>Instructions</h5>
                            <ol start="1">
                                <li></li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            );
        }
        else if (recipe === "Cremeschnitte") {
            return (
                <Container className="animateBody">
                    <Row className="justify-content-center recipe">
                        <h3>Cremeschnitte</h3>
                    </Row>
                    <Row className="justify-content-center recipeDetails">
                        <Col xs="3">
                            <h5>Ingredients</h5>
                        </Col>
                        <Col xs="6">
                            <h5>Instructions</h5>
                            <ol start="1">
                                <li></li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            );
        }
        else if (recipe === "New York-style Cheesecake") {
            return (
                <Container className="animateBody">
                    <Row className="justify-content-center recipe">
                        <h3>New York-style Cheesecake</h3>
                    </Row>
                    <Row className="justify-content-center recipeDetails">
                        <Col xs="3">
                            <h5>Ingredients</h5>
                        </Col>
                        <Col xs="6">
                            <h5>Instructions</h5>
                            <ol start="1">
                                <li></li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            );
        }
        else if (recipe === "Oreo Cheesecake") {
            return (
                <Container className="animateBody">
                    <Row className="justify-content-center recipe">
                        <h3>Oreo Cheesecake</h3>
                    </Row>
                    <Row className="justify-content-center recipeDetails">
                        <Col xs="3">
                            <h5>Ingredients</h5>
                        </Col>
                        <Col xs="6">
                            <h5>Instructions</h5>
                            <ol start="1">
                                <li></li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            );
        }
        else if (recipe === "Raspberry Swirl Cheesecake") {
            return (
                <Container className="animateBody">
                    <Row className="justify-content-center recipe">
                        <h3>Raspberry Swirl Cheesecake</h3>
                    </Row>
                    <Row className="justify-content-center recipeDetails">
                        <Col xs="3">
                            <h5>Ingredients</h5>
                        </Col>
                        <Col xs="6">
                            <h5>Instructions</h5>
                            <ol start="1">
                                <li></li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            );
        }
        else if (recipe === "Sachertorte") {
            return (
                <Container className="animateBody">
                    <Row className="justify-content-center recipe">
                        <h3>Sachertorte</h3>
                    </Row>
                    <Row className="justify-content-center recipeDetails">
                        <Col xs="3">
                            <h5>Ingredients</h5>
                        </Col>
                        <Col xs="6">
                            <h5>Instructions</h5>
                            <ol start="1">
                                <li></li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            );
        }
        else if (recipe === "Butterzopf") {
            return (
                <Container className="animateBody">
                    <Row className="justify-content-center recipe">
                        <h3>Butterzopf</h3>
                    </Row>
                    <Row className="justify-content-center recipeDetails">
                        <Col xs="3">
                            <h5>Ingredients</h5>
                        </Col>
                        <Col xs="6">
                            <h5>Instructions</h5>
                            <ol start="1">
                                <li></li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            );
        }
    }

    renderPage(pageType) {
        if (pageType === "profile") {
            return (
                <Row className="justify-content-center animateBody">
                    Profile
                </Row>
            );
        } else if (pageType === "travel") {
            let randomIMGArray;
            const dataImg = images;
            randomIMGArray = this.randomizeIMGArray(dataImg);

            return (
                // <Container fluid className="animateTravel ">
                    <Row className="justify-content-center galleryContainer">
                        {/*<Gallery items={randomIMGArray} autoPlay="True" />*/}
                        {/*<Gallery photos={dataImg} />*/}
                        <Gallery images={randomIMGArray} thumbnailWidth="160px" thumbnailHeight="160px" />
                        {/*<Gallery images={randomIMGArray} />*/}
                    </Row>
                // </Container>
            );

        } else if (pageType === "bites") {
            return (
                <Container fluid className="animateTravel">
                    <Row className="justify-content-center dropdownSelection animateTravel">
                        <Button className="bitesLabel" variant="success" disabled>Bites...</Button>
                        &nbsp;
                        <select className="selection" onChange={(e) => {
                            this.setState({recipe: e.target.value})
                        }}>
                            <option defaultValue></option>
                            <option>Apple Pie</option>
                            <option>Black Forest Cake (Schwarzwälder Kirschtorte)</option>
                            <option>Butterscotch Bars</option>
                            <option>Chocolate Cake</option>
                            <option>Chocolate Lava Cake</option>
                            <option>Cremeschnitten</option>
                            <option>New York-style Cheesecake</option>
                            <option>Oreo Cheesecake</option>
                            <option>Raspberry Swirl Cheesecake</option>
                            <option>Sachertorte</option>
                            <option>Butterzopf</option>
                        </select>
                    </Row>
                    <Row>
                        <Col>
                            {this.renderRecipe(this.state.recipe)}
                        </Col>
                    </Row>
                </Container>
            );
        }
        else if (pageType === "resources") {
            return (
                <Container>
                    <Row className="justify-content-center animateBody">
                        <h4>Travel</h4>
                    </Row>
                    <Row className="justify-content-center animateBody">
                        <p>
                            All photos were taken during my travel using mirrorless/phone camera and were not edited.
                        </p>
                    </Row>
                    <br />
                    <Row className="justify-content-center animateBody">
                        <h4>Bites</h4>
                    </Row>
                    <Row className="justify-content-center animateBody">
                        <p>
                            All recipes were either taken from other websites or shared by a friend. Please see below for sources.
                        </p>
                    </Row>
                    <Row className="justify-content-end animateBody">
                        <Col xs="5">
                            Apple Pie
                        </Col>
                        <Col xs="4">
                            <a href="https://tasty.co/recipe/apple-pie-from-scratch" target="_blank" rel="noreferrer">TASTY</a>
                        </Col>
                    </Row>
                    <Row className="justify-content-end animateBody">
                        <Col xs="5">
                            Black Forest Cake (Schwarzwälder Kirschtorte)
                        </Col>
                        <Col xs="4">
                            <a href="https://livforcake.com/black-forest-cake/" target="_blank" rel="noreferrer">LIV FOR CAKE</a>
                        </Col>
                    </Row>
                    <Row className="justify-content-end animateBody">
                        <Col xs="5">
                            Butterscotch Bars
                        </Col>
                        <Col xs="4">
                            <a href="http://ltdanskitchen.blogspot.com/2013/04/butterscotch-bars-with-pictures.html" target="_blank" rel="noreferrer">LtDan'sKitchen.com</a>
                        </Col>
                    </Row>
                    <Row className="justify-content-end animateBody">
                        <Col xs="5">
                            Chocolate Cake
                        </Col>
                        <Col xs="4">
                            <a href="https://www.bbc.co.uk/food/recipes/easy_chocolate_cake_31070" target="_blank" rel="noreferrer">BBC Food</a>
                        </Col>
                    </Row>
                    <Row className="justify-content-end animateBody">
                        <Col xs="5">
                            Chocolate Lava Cake
                        </Col>
                        <Col xs="4">
                            <a href="https://www.garnishandglaze.com/molten-lava-cakes-for-two/" target="_blank" rel="noreferrer">Garnish & Glaze</a> & <a href="https://cooking.nytimes.com/recipes/1019957-chocolate-lava-cake-for-two" target="_blank" rel="noreferrer">NYTimes Cooking</a>
                        </Col>
                    </Row>
                    <Row className="justify-content-end animateBody">
                        <Col xs="5">
                            Cremeschnitten
                        </Col>
                        <Col xs="4">
                            <a href="https://www.bettybossi.ch/de/Rezept/ShowRezept/BB_BBNL150511_0001A-80-de" target="_blank" rel="noreferrer">Betty Bossi</a>
                        </Col>
                    </Row>
                    <Row className="justify-content-end animateBody">
                        <Col xs="5">
                            New York-style Cheesecake
                        </Col>
                        <Col xs="4">
                            <a href="https://www.onceuponachef.com/recipes/new-york-style-cheesecake.html" target="_blank" rel="noreferrer">once upon a chef with Jenn Segal</a>
                        </Col>
                    </Row>
                    <Row className="justify-content-end animateBody">
                        <Col xs="5">
                            Oreo Cheesecake
                        </Col>
                        <Col xs="4">
                            <a href="https://preppykitchen.com/oreo-cheesecake/" target="_blank" rel="noreferrer">Preppy Kitchen</a>
                        </Col>
                    </Row>
                    <Row className="justify-content-end animateBody">
                        <Col xs="5">
                            Raspberry Swirl Cheesecake
                        </Col>
                        <Col xs="4">
                            <a href="https://plus.laurainthekitchen.com/recipes/raspberry-swirl-cheesecake/" target="_blank" rel="noreferrer">Laura in the Kitchen</a>
                        </Col>
                    </Row>
                    <Row className="justify-content-end animateBody">
                        <Col xs="5">
                            Sachertorte
                        </Col>
                        <Col xs="4">
                            <a href="https://www.sacher.com/en/original-sacher-torte/recipe/" target="_blank" rel="noreferrer">Hotel Sacher</a>
                        </Col>
                    </Row>
                    <Row className="justify-content-end animateBody">
                        <Col xs="5">
                            Butterzopf
                        </Col>
                        <Col xs="4">
                            <a href="https://www.littleswissbaker.com/butterzopf-swiss-braided-bread/" target="_blank" rel="noreferrer">Little Swiss Baker</a>
                        </Col>
                    </Row>
                    <br/>
                    <Row className="justify-content-center animateBody">
                        <h4>Others</h4>
                    </Row>
                    <Row className="justify-content-center animateBody">
                        <p>
                            Website logo was done through <a href="https://hatchful.shopify.com/" target="_blank" rel="noreferrer">Hatchful</a>.
                        </p>
                    </Row>
                </Container>
            );
        }
    }




    render() {
        const travelOptions = (props) => (
            <Tooltip id="selection" {...props}>
                Selection
            </Tooltip>
        );
        return (
            <Container fluid>
                {/* HEADER */}
                <Row className="justify-content-center animateHeader">
                    <Col className="menu">
                        <Nav className="justify-content-end">
                            <Col
                                md="auto"
                                className="menuLinks"
                                onClick={() => {
                                    this.updateProfile();
                                }}>
                                Profile
                            </Col>
                            &nbsp;
                            <OverlayTrigger
                                placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={ travelOptions }>
                                <Col
                                    md="auto"
                                    className="menuLinks"
                                    onClick={() => {
                                        this.updateTravel();
                                    }}>
                                    Travel
                                </Col>
                            </OverlayTrigger>
                        </Nav>
                    </Col>
                    <Col md={"auto"}>
                        <Media>
                            <Image
                                className="logo"
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
                    <Col className="menu">
                        <Nav>
                            <Col
                                md="auto"
                                className="menuLinks"
                                onClick={() => {
                                    this.updateBites();
                                }}>
                                Bites
                            </Col>
                            &nbsp;
                            <Col
                                md="auto"
                                className="menuLinks"
                                onClick={() => {
                                    this.updateResources();
                                }}>
                                Resources
                            </Col>
                        </Nav>
                    </Col>
                </Row>
                {this.renderPage(this.state.pageType)}
            </Container>
        );
    }
}

export default withRouter(Personal);