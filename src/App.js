import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./header.js";
import Home from "./home.js";
import Result from "./result.js";
import Result2 from "./result2.js";
import NotFound from "./not-found.js";
import Select from "./select.js";
import Select2 from "./select2.js";
import styled from "styled-components";
import "./spinner.css";

const MainContents = styled.div`
  margin-top: 55px;
`;

class App extends React.Component {
  render() {
    return (
      <Router basename="/blue-aloe">
        <div>
          <Header />
          <MainContents>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/result" component={Result} />
              <Route exact path="/select" component={Select} />
              <Route component={NotFound} />
            </Switch>
          </MainContents>
        </div>
      </Router>
    );
  }
}

export default App;
