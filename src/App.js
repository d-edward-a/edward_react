import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import NavBar from "./components/navbar/NavBar";
import {Home} from "./pages/Home";
import {Profile} from "./components/profile/Profile";
import {Travel} from "./components/gallery/Travel";
import {Foodie} from "./components/food/Foodie";
import {Disclaimer} from "./components/disclaimer/Disclaimer";
import Footer from "./components/footer/Footer";

class App extends Component {
    render() {
        return (
            <>
                    <BrowserRouter>
                        <div>
                        <NavBar />
                        <div className="pages">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/home" component={Home} />
                                <Route path="/profile" component={Profile} />
                                <Route path="/travel" component={Travel} />
                                <Route path="/foodie" component={Foodie} />
                                <Route path="/disclaimer" component={Disclaimer} />
                            </Switch>
                        </div>
                        <Footer />
                        </div>
                    </BrowserRouter>
            </>
        );
    }
}

export default App;
