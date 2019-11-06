import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomePage from '../components/HomePage/HomePage';
import Category from '../components/Category/Category';

class AppRouter extends React.Component {

    render() {
        return(
            <Router>
                <Header />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/category/:url" component={Category} />
                    </Switch>
                <Footer />
            </Router>
        ); 
    }
}

export default AppRouter;