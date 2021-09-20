import React from "react";
import { BrowserRouter as Router, Route} from  'react-router-dom';
// import shared layout component
import Layout from '../components/Layout';

// import routes
import Home from './home';
import MyBins from "./mybins";
import Favorites from "./favorites";

const Pages = () => {
    return (
        <Router>
            <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/mybins" component={MyBins} />
            <Route path="/favorites" component={Favorites} />
            </Layout>
        </Router>
    );
};

export default Pages;