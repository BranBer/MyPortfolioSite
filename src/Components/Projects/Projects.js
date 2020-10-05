import React, {useState, useEffect, useContext} from 'react';
import styles from './Projects.module.scss';
import CSSTransition from 'react-transition-group';

import GlobalNav from '../GlobalNav/GlobalNav';
import {Link} from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';

import Project from '../Project/Project';

const Projects = (props) =>
{
    let currentLocation = props.location.pathname.split('/');
    currentLocation = currentLocation[currentLocation.length - 1];

    let myContext = useContext(GlobalContext);

    const [currentTag, updateCurrentTag] = useState('');
    const [projects, updateProjects] = useState([...myContext.projects]);
    
    const filterProjects = (filter) =>
    {
        let newProjects = [];        

        myContext.projects.forEach(element => {
            if(element.tags.indexOf(filter) !== -1)
            {
                newProjects.push(element);
            }
        });

        updateProjects(newProjects);
    }

    useEffect(() => 
    {
        filterProjects(); 
    }, []);

    let showProjects = myContext.projects.map(
        (project, index) =>{           

            if(project.tags.indexOf(currentTag) !== -1 || currentTag == '')
            {
                return (<Project key = {"project" + index} 
                                 id = {project.title}
                                 tags = {project.tags}
                                 title = {project.title}
                                 url = {project.url}
                                 githubLinks = {project.github}
                                 coverImage = {project.coverImage}/>);
            }
    });


    return (
        <div className = {styles.ProjectsContainer}>
            <div className = {styles.ProjectsBackground}>
                <div className = {styles.ProjectsContent}>
                    <div className = {styles.ProjectsHeader}>
                        <h1>PROJECTS</h1>
                        <GlobalNav/>
                        <br/>
        
                        <div className = {styles.ProjectsFilter}>
                            <button
                                  style = {{textDecoration: 'none'}}
                                  className = {styles.ProjectFilter}
                                  onClick = {() => {updateCurrentTag('')}}>All Projects</button>

                            <button
                                  style = {{textDecoration: 'none'}}
                                  className = {styles.ProjectFilter}
                                  onClick = {() => {updateCurrentTag('frontend')}}>Frontend</button>
        
                            <button
                                  style = {{textDecoration: 'none'}}
                                  className = {styles.ProjectFilter}
                                  onClick = {() => {updateCurrentTag('backend')}}>Backend</button>
                                  
                            <button
                                  style = {{textDecoration: 'none'}}
                                  className = {styles.ProjectFilter}
                                  onClick = {() => {updateCurrentTag('research')}}>Research</button>
        
                            <button 
                                  style = {{textDecoration: 'none'}}
                                  className = {styles.ProjectFilter}
                                  onClick = {() => {updateCurrentTag('other')}}>Other</button>                              
                        </div>
                        
                        <div className = {styles.Projects}>
                            {
                                showProjects
                            }
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;