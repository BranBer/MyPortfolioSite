import React, {useState, useContext, useEffect, useRef} from 'react';
import './App.scss';
import {Switch, Route, BrowserRouter, useHistory, withRouter} from 'react-router-dom';

import Intro from '../Components/Intro/Intro';
import Projects from '../Components/Projects/Projects';
import Skills from '../Components/Skills/Skills';
import Contact from '../Components/Contact/Contact';

import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { GlobalContext } from '../Context/GlobalContext';


function App() {
  const history = useHistory();

  let myContext = useContext(GlobalContext);

  const [showIntermission, updateShowIntermission] = useState(false);


  const pageTransitionTrigger = () =>
  {
    console.log('triggered!!');
    updateShowIntermission(!showIntermission);
  }

  useEffect(()=>{
    myContext.setPageTransition(() => updateShowIntermission(!showIntermission));
  });  

  return (
    <div className="App">
      {/* <button onClick = {() => updateShowIntermission(!showIntermission)}>transition</button> */}
      <CSSTransition 
        in = {showIntermission}
        timeout = {1000}
        classNames = "slider"
        
        >

          <div className = "intermission">

          </div>
        
      </CSSTransition>


      <Route render ={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key = {location.key}
            timeout = {1000}
            classNames = "pageslide"
          >
          <>  
            <Switch location={location}> 
              <Route path = "/projects/" render = {(props) => (
                <>
                  
                  <Projects {...props} />
                </>
              )}/>
              <Route path = "/skills/" component = {Skills}/>
              <Route path = "/contact/" component = {Contact}/>
              <Route path = "/" component = {Intro}/>          
            </Switch>
           </>
          </CSSTransition>
        </TransitionGroup>
      )}/>

    </div>
  );
}

export default App;
