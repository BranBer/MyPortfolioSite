import React, {useEffect, useState, useContext} from 'react';
import styles from './ProjectPage.module.scss';
import GalleryImage from '../GalleryImage/GalleryImage';
import GlobalNav from '../GlobalNav/GlobalNav';
import {GlobalContext} from '../../Context/GlobalContext';
import axios from 'axios';

const ProjectPage = (props) =>
{
    const [project, updateProject] = useState({});    
    const [projectLanguages, updateProjectLanguages] = useState({});
    const [sum, updateSum] = useState(0);

    let myContext = useContext(GlobalContext);
    let title = props.match.params.title;

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
        let myProject = myContext.projects.filter((project) => {return project.title == title});
        
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

        // for (let i in github) {
        //     let gitLink = github[i].split('/').slice(
        //             [github[i].split('/').indexOf('github') - 1], 
        //             github[i].split('/').length).join('/');

        //     gitLink = githubAPI + gitLink + '/languages';
        //     //console.log(gitLink);
          

        //     axios.get(gitLink)
        //     .then(res => {
        //         updateProjectLanguages({...res.data, ...projectLanguages});
        //     });

            
        // };
    }, []);

    let LanguagePercentage = null;

    // let LanguagePercentage = 
    // projectLanguages.length > 0?
    //     projectLanguages.map((languageSet, index) => (
    //         <div key = {'languageSet' + index}>
    //             {
    //                 Object.entries(languageSet).map((language, lIndex) => (
    //                     <div key = {'language' + lIndex + 'set' + index}>
    //                         <label>{language[0]}</label>
    //                     </div>
    //                 ))
    //             }
    //         </div>
    //     ))
    // :
    //     console.log('here');

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

                    <p>{project.description}</p>
                    <br/>
                    <div className = {styles.LanguageContainer}>
                        {
                            Object.entries(projectLanguages).map((language, index) => {
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
                                    <label style = {{width: '120px', textAlign: 'left'}}>{language[0]}</label>    

                                    <div style = {{
                                        width: '75%',
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

                                    
                                    <span style = {{width: '20%', textAlign: 'right'}}>{percentage + '%'}</span>
                                </div>
                            )})
                        }
                    </div>
                    <br/>
                </>:
                null}

            </div>
        </div>
    );
}

export default ProjectPage;