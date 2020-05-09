import React from 'react';
import './css/style.css';
import {BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing';
import ChangelogList from './components/Changelog/ChangelogList';
import Header from './components/Header';
import Setup from './components/Setup';
import Wiki from './components/Wiki/Wiki';
import Bugs from './components/Wiki/Articles/Bugs'

import CustomContent from './components/CustomContent';

function App() {
  return (
    <BrowserRouter>
      <div className = "fullApp">
        <Header />
        <Route exact path = "/" component = {Landing} />
        <Route exact path = "/changelog" component = {ChangelogList} />
        <Route exact path = "/customcontent" component = {Wiki} />
        <Route exact path = "/setup" component = {Setup} />
        <Route exact path = "/wiki" component = {Wiki} />
        <Route exact path = "/bugs" component = {Bugs} />
      </div>
    </BrowserRouter>
    // <div className="App">
    //   <div className="container">
        // <header className="header">
        //   <ul className="nav">
        //     <li className="nav__item">
        //       <a href="#" className="nav__link">
        //         Links
        //       </a>
        //     </li>
        //     <li className="nav__item">
        //       <a href="#" className="nav__link">
        //         Setup
        //       </a>
        //     </li>
        //     <li className="nav__item">
        //       <a href="#" className="nav__link">
        //         Changelog
        //       </a>
        //     </li>
        //     <li className="nav__item">
        //       <a href="#" className="nav__link">
        //         Known Bugs
        //       </a>
        //     </li>
        //     <li className="nav__item">
        //       <a href="#" className="nav__link">
        //         Custom Content
        //       </a>
        //     </li>
        //   </ul>
        // </header>
    //     {Info()}
    //     {Changelog()}
    //     <div className="gallery">Gallery</div>
    //     <footer className="footer">Footer</footer>
    //   </div>
    // </div>
  );
}

export default App;
