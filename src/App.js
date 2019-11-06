import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Category from './components/Category/Category';
import { BrowserRouter as Router, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Header/>
        <Route exact path="/" component={HomePage} />
        <Route path="/category" component={Category} />
      <Footer/>
    </Router>
  );
}

export default App;
