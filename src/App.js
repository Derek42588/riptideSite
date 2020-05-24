import React, {useState} from 'react';
import './css/style.css';
import {BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing';
import ChangelogList from './components/Changelog/ChangelogList';
import Header from './components/Header';
import Setup from './components/Setup';
import Wiki from './components/Wiki/Wiki';
import Bugs from './components/Wiki/Articles/Bugs'
import Tournaments from './components/Tournaments'
import Shelf from './components/Shelf'


function App() {

  
  const [showShelf, setShowShelf] = useState(false)

  function toggleShelf() {
    setShowShelf(!showShelf)
  }

  return (
    <BrowserRouter>
      <div className = "fullApp">
      <Header toggleShelf = {toggleShelf} />

        <Shelf shelfVisible={showShelf} toggleShelf={toggleShelf} />
      <div
        className={'backdrop' + (showShelf ? ' visible' : '')}
        onClick={() => toggleShelf()}
      />
        <Route exact path = '/' render = {() => <Landing shelfVisible = {showShelf} toggleShelf = {toggleShelf}/>} />
        <Route exact path = '/changelog' render = {() => <ChangelogList shelfVisible = {showShelf} toggleShelf = {toggleShelf}/>} />
        {/* <Route exact path = '/customcontent' render = {(props) => <Wiki shelfVisible = {showShelf} toggleShelf = {toggleShelf}/>} /> */}
        <Route exact path = '/setup' render = {() => <Setup shelfVisible = {showShelf} toggleShelf = {toggleShelf}/>} />
        {/* <Route exact path = '/wiki' render = {(props) => <Wiki shelfVisible = {showShelf} toggleShelf = {toggleShelf}/>} /> */}
        <Route exact path = '/bugs' render = {() => <Bugs shelfVisible = {showShelf} toggleShelf = {toggleShelf}/>} />
        <Route exact path = '/tournaments' render = {() => <Tournaments shelfVisible = {showShelf} toggleShelf = {toggleShelf}/>} /
        >
                  <Route path = "/wiki" component = {Wiki} />
                  <Route path = "/customcontent" component = {Wiki} />

{/*         

        <Route exact path = "/setup" component = {Setup} />
        <Route exact path = "/bugs" component = {Bugs} />
        <Route exact path = "/tournaments" component = {Tournaments} /> */}
      </div>
    </BrowserRouter>

  );
}

export default App;
