import React from 'react';
import './css/style.css';
import {BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing';
import ChangelogList from './components/Changelog/ChangelogList';
import Header from './components/Header';
import Setup from './components/Setup';
import Wiki from './components/Wiki/Wiki';
import Bugs from './components/Wiki/Articles/Bugs'


function App() {
  return (
    <BrowserRouter>
      <div className = "fullApp">
        <Header />
        <Route exact path = "/" component = {Landing} />
        <Route exact path = "/changelog" component = {ChangelogList} />
        <Route path = "/customcontent" component = {Wiki} />
        <Route exact path = "/setup" component = {Setup} />
        <Route path = "/wiki" component = {Wiki} />
        <Route exact path = "/bugs" component = {Bugs} />
      </div>
    </BrowserRouter>

  );
}

export default App;
