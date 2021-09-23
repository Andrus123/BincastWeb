import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import shared layout component
import Layout from "../components/Layout";

//import the signup route
import SignUp from './signup';
// import routes
import Home from "./home";
import MyBins from "./mybins";
import Favorites from "./favorites";
import NotePage from "./note";

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route path="/signup" component={SignUp} />
        <Route exact path="/" component={Home} />
        <Route path="/mybins" component={MyBins} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/note/:id" component={NotePage} />
      </Layout>
    </Router>
  );
};

export default Pages;
