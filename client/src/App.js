import React from "react";
import { Container } from "react-bootstrap";
import Navs from "./components/Navs";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Container>
        <Navs />
        <Route exact path="/" component={About} />
      </Container>
    </Router>
  );
}

export default App;
