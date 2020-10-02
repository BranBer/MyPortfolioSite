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

            if(project.tags.indexOf(currentLocation) !== -1 || currentLocation == 'projects')
            {
                return (<Project key = {"project" + index} 
                                 id = {"projects" + index} tags = {project.tags}
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
                        <Link to = {'/projects'} 
                                  style = {{textDecoration: 'none'}}
                                  className = {styles.ProjectFilter}>All Projects</Link>

                            <Link to = {'/projects' + '/frontend'} 
                                  style = {{textDecoration: 'none'}}
                                  className = {styles.ProjectFilter}>Frontend</Link>
        
                            <Link to = {'/projects' + '/backend'} 
                                  style = {{textDecoration: 'none'}}
                                  className = {styles.ProjectFilter}>Backend</Link>
                                  
                            <Link to = {'/projects' + '/research'} 
                                  style = {{textDecoration: 'none'}}
                                  className = {styles.ProjectFilter}>Research</Link>
        
                            <Link to = {'/projects' + '/other'} 
                                  style = {{textDecoration: 'none'}}
                                  className = {styles.ProjectFilter}>Other</Link>                              
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