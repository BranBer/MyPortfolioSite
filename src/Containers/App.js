import React, {useState, useContext, useEffect} from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom';

import Intro from '../Components/Intro/Intro';
import Projects from '../Components/Projects/Projects';
import Skills from '../Components/Skills/Skills';
import Contact from '../Components/Contact/Contact';
import ProjectPage from '../Components/ProjectPage/ProjectPage';

import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { GlobalContext } from '../Context/GlobalContext';


function App() {

  let myContext = useContext(GlobalContext);

  const [showIntermission, updateShowIntermission] = useState(false);


  useEffect(()=>{
    myContext.setPageTransition(() => updateShowIntermission(!showIntermission));
  });  

  return (
    <div className="App">
      <CSSTransition 
        in = {showIntermission}
        timeout = {750}
        classNames = "slider"
        
        >

          <div className = "intermission">            
            
          </div>
        
      </CSSTransition>


      <Route render ={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key = {location.key}
            timeout = {750}
            classNames = "pageslide"
          >
          <>  
            <Switch location={location}> 
              <Route path = "/projects/" render = {(props) => (
                <>
                  
                  <Projects {...props} />
                </>
              )}/>
              <Route path = "/project/:title" component = {ProjectPage}/>
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
