import React from "react";
import { Route, Switch } from "react-router-dom";
import "./style.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Cards from "./components/Cards";
import Card from "./components/Card";
import About from "./components/About";


const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Cards" component={Cards} />
        <Route exact path="/Card/:id" component={Card} />
        <Route exact path="/About" component={About} />
        {/* <Route exact path="/" component={} /> */}
      </Switch>

    </>
  );
};
export default App;
