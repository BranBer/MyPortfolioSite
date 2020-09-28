import React from 'react';
import './App.scss';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Intro from '../Components/Intro/Intro';
import Projects from '../Components/Projects/Projects';
import Skills from '../Components/Skills/Skills';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Switch>
          <Route path = "/projects/" component = {Projects}/>
          <Route path = "/skills/" component = {Skills}/>
          <Route path = "/" component = {Intro}/>          
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
