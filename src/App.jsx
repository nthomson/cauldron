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

// const brew = [
//   {
//       element: 'page',
//       title: 'A Homebrew Adventure',
//       children: [
//           {
//               element: 'col',
//               size: '50',
//               children: [
//                   {
//                       element: 'h2',
//                       children: 'Nullam nec gravida sapien'
//                   },
//                   {
//                       element: 'p',
//                       children: 'Proin a ligula scelerisque, tempus lacus sodales, sagittis justo. Etiam a laoreet quam, dictum volutpat quam. Donec sodales eu libero in dignissim. Fusce venenatis neque sit amet commodo auctor.'
//                   },
//                   {
//                       element: 'scene',
//                       children: 'Donec in nulla non diam semper tempor. Nullam nec gravida sapien. Morbi volutpat condimentum nibh vitae luctus. Nulla vulputate turpis mauris, eu tempus dolor accumsan sed.'
//                   },
//                   {
//                       element: 'table'
//                   },
//                   {
//                       element: 'item',
//                       name: 'Staff of Focused Pain',
//                       type: 'Staff, Arcane Focus',
//                       children: '+1 Spell Attack, +1 Spell Saving Throw DC Action: You are able to use the crystal embedded into this staff in order to focus your pain, recovering one expended spell slot. You are only able to do this once per day.'
//                   }
//               ]
//           },
//           {
//               element: 'col',
//               size: '50',
//               children: [
//                   {
//                       element: 'statBlock',
//                       monsterId: 71
//                   }
//               ]
//           }
//       ]
//   }
// ];