import React from 'react';
import styles from './Projects.module.scss';
import CSSTransition from 'react-transition-group';

import GlobalNav from '../GlobalNav/GlobalNav';
import {Link} from 'react-router-dom';

const Projects = (props) =>
{
    let currentLocation = props.location.pathname;

    return (
        <div className = {styles.ProjectsContainer}>
            <div className = {styles.ProjectsContent}>
                <div className = {styles.ProjectsHeader}>
                    <h1>PROJECTS</h1>
                    <GlobalNav/>
                    <br/>
    
                    <div className = {styles.ProjectsFilter}>
                        
                        <Link to = {currentLocation + '/frontend'} 
                              style = {{textDecoration: 'none'}}
                              className = {styles.ProjectFilter}>Frontend</Link>
    
                        <Link to = {currentLocation + '/backend'} 
                              style = {{textDecoration: 'none'}}
                              className = {styles.ProjectFilter}>Backend</Link>
                              
                        <Link to = {currentLocation + '/research'} 
                              style = {{textDecoration: 'none'}}
                              className = {styles.ProjectFilter}>Research</Link>
    
                        <Link to = {currentLocation + '/other'} 
                              style = {{textDecoration: 'none'}}
                              className = {styles.ProjectFilter}>Other</Link>                              
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Projects;