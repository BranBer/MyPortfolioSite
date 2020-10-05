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
    let myContext = useContext(GlobalContext);
    let title = props.match.params.title;

    let githubAPI = 'https://api.github.com/repos/';

    useEffect(() => {
        let myProject = myContext.projects.filter((project) => {return project.title == title});
        
        updateProject(myProject[0]);
        
        let github = myProject[0].github;

        for (var i in github) {
            let gitLink = github[i].split('/').slice(
                    [github[i].split('/').indexOf('github') - 1], 
                    github[i].split('/').length).join('/');

            gitLink = githubAPI + gitLink + '/languages';
          

            axios.get(gitLink)
            .then(res => {
                let sum = 0;


                for(var i in res.data){
                    sum+= res.data[i];
                }

                console.log(sum);
                
                let languages = res.data;

                for(var i in languages){
                    languages[i] = languages[i]/sum * 100;
                }

                updateProjectLanguages({...languages, ...res.data});
            });
        };
    }, []);


    let LanguagePercentage = Object.entries(projectLanguages).map((language, index) => {
        console.log(language);
        return (
            <div 
                className = {styles.LanguageContent} 
                key = {props.title + 'language' + index}
                style = {{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <label>{language[0]}</label> 
                <div className = {styles.LanguagePercentage} style = {{width: '100%'}}>
                    <div className = {styles.LanguagePercentage1}  style = {{width: `${language[1]}%`, height: '100%', backgroundColor: 'lightblue', color: 'black'}}>
                        
                    </div> 
                    <div className = {styles.LanguagePercentage2} style = {{width: `${100 - language[1]}%`, height: '100%', backgroundColor: 'salmon'}}>

                    </div> 

                    <div className = {styles.PercentageNumber}>
                        {language[1].toFixed(2) + "%"}
                    </div>
                </div>
            </div>)
    });

    return (
        <div className = {styles.ProjectPageContainer}>

            <div className = {styles.ProjectPageContent}>
                {project !== {}?
                <>
                    
                    <h2>{project.title?project.title.toUpperCase():null}</h2>
                    <GlobalNav/>

                    <hr/>

                    <GalleryImage images = {
                        [project.coverImage].concat(project.images)
                    }/>

                    <p>{project.description}</p>

                    <div className = {styles.LanguageContainer}>
                        {
                            LanguagePercentage
                        }
                    </div>

                </>:
                null}

            </div>
        </div>
    );
}

export default ProjectPage;