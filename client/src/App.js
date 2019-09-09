import React from "react";
import { Container } from "react-bootstrap";
import Navs from "./components/Navs";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <Container>
        <Navs />
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Container>
    </Router>
  );
}

export default App;
