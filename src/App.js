import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Main from "./pages/Main";
import Personal from "./pages/Personal";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Route path="/" exact strict render={Main} />
            <Route path="/personal" exact strict render={Personal} />
            {/*<Footer />*/}
          </div>
        </BrowserRouter>
    );
  }
}

export default App;