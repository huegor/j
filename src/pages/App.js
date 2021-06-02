import logo from '../logo.svg';
import '../stylesheets/index.scss';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Space from "./Space"
import Navigation from "./Navigation";
import Footer from "./Footer"
import Vaquero from "./Vaquero";
import Seeds from "./Seeds";
import Iggy from "./Iggy";
import Christmas from "./Christmas";
import Blanket from "./Blanket";

//define router paths
function App() {
  //italicizes the current page in nav
  const [page, setPage] = useState(null);

  return (
    <Router>
      <Navigation />
      <div class="main">
        <Space />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/vaquero" exact component={() => <Vaquero text="vaquero"/>} />
          <Route path="/seeds" exact component={() => <Seeds text="seeds"/>} />
          <Route path="/iggy" exact component={() => <Iggy text="iggy"/>} />
          <Route path="/christmas" exact component={() => <Christmas text="christmas"/>} />
          <Route path="/blanket" exact component={() => <Blanket text="blanket"/>} />
        </Switch>
        <Space />

      </div>
      <Footer />
    </Router>
  );
}

export default App;
