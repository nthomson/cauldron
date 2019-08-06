import React from 'react';
import { HashRouter, Route } from "react-router-dom";


import Editor from './components/editor/editor';
import Home from './components/home/home';
import SiteHeader from './components/site-header/site-header';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <SiteHeader />
        <Route path="/" exact component={Home} />
        <Route path="/editor" exact component={Editor} />
      </HashRouter>
    </div >
  );
}

export default App;