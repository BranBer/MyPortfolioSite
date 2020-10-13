import React, {useEffect, useState, useContext} from 'react';
import styles from './ProjectPage.module.scss';
import GalleryImage from '../GalleryImage/GalleryImage';
import GlobalNav from '../GlobalNav/GlobalNav';
import {GlobalContext} from '../../Context/GlobalContext';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const ProjectPage = (props) =>
{
    const [project, updateProject] = useState({});    
    const [projectLanguages, updateProjectLanguages] = useState({});

    let myContext = useContext(GlobalContext);
    let myHistory = useHistory();

    let title = props.match.params.title;
    let myProject = myContext.projects.filter((project) => {return project.title === title});
    
    console.log(project.title);

    let githubAPI = 'https://api.github.com/repos/';

    const getSum = (object) =>
    {
        let sum = 0;

        for (let i in object){
            sum += object[i];
        }

        return sum;
    }

    useEffect(() => {
        
        updateProject(myProject[0]);
        let githubLinks = myProject[0].github;

        let gitPromises = [];

        for (let i in githubLinks){

            let gitLink = githubLinks[i].split('/').slice(
            [githubLinks[i].split('/').indexOf('github') - 1], 
            githubLinks[i].split('/').length).join('/');

            gitLink = githubAPI + gitLink + '/languages';
            gitPromises.push(axios.get(gitLink));
        }


        axios.all(gitPromises)
            .then(
                axios.spread((...responses) => {     
                    let newLanguages = {};               
                    const myResponses = responses;


                    for(var i in myResponses)
                    {
                        newLanguages = {...myResponses[i].data, ...newLanguages}
                    }

                    updateProjectLanguages(newLanguages);
                })
            )
    }, [githubAPI, myProject]);


    let percentages = Object.entries(projectLanguages).map((language, index) => {
        let percentage = (language[1]/getSum(projectLanguages) * 100).toFixed(2);

        return (
        <div 
            key = {'language' + index}
            style = {{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%'
            }}>
            <label style = {{width: '100px', textAlign: 'left', marginRight: '30px'}}>{language[0]}</label>    

            <div style = {{
                width: '50%',
                height: '100%',
                border:'1px solid lightblue',
            }}> 
                <div
                     style = {{
                        width: `${percentage}%`,
                        height: '100%',
                        backgroundColor: 'lightblue'
                    }}>
                </div>
            </div>

            
            <span style = {{width: '70px', paddingLeft: '30px',textAlign: 'right'}}>{percentage + '%'}</span>
        </div>
    )});

    let links = myProject && myProject.length > 0 && myProject[0].github.length> 0?
        [myProject[0].url].concat(myProject[0].github).map((url, index) =>
        {
            console.log(url);

            return (
                <div className = {styles.url} key = {props.id + 'githubLink' + index}>
                    <div className = {styles.urlBackgroundTop}/>
                    <p><a className = {styles.Link} href = {url} target = {'_blank'} rel="noopener noreferrer">{url}</a></p>
                    <div className = {styles.urlBackgroundBottom}/>
                </div>
            );
        })
    : null
    

    return (
        <div className = {styles.ProjectPageContainer}>

            <div className = {styles.ProjectPageContent}>
                {project !== {}?
                <>
                    
                    <h2>{project.title?project.title.toUpperCase():null}</h2>
                    <GlobalNav/>

                    <hr/>
                    <br/>

                    <GalleryImage images = {
                        [project.coverImage].concat(project.images)
                    }/>

                    <hr/>

                    <p>{project.description}</p>

                    <br/>

                    <div className = {styles.LanguageContainer}>
                        {
                            percentages
                        }
                    </div>

                    <br/>
                    <hr/>

                    <div className = {styles.Links}>
                        <label>LINKS</label>
                        {
                            links
                        }
                    </div>

                    <br/>

                    <hr/>

                    <br/>

                    <button onClick = {() => {myHistory.goBack(); myContext.pageTransition();}}>⬅ Go Back</button>

                    <br/>
                </>:
                null}

            </div>
        </div>
    );
}

export default ProjectPage;