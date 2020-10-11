import React, {useContext} from 'react';
import {GlobalContext} from '../../Context/GlobalContext';
import styles from './Skills.module.scss';

import GlobalNav from '../GlobalNav/GlobalNav';


const Skills = (props) =>
{
    let myContext = useContext(GlobalContext);

    return (
        <div className = {styles.Skills}>
            <div className = {styles.Background}/>

            <div className = {styles.SkillsContent}>
                <h2>SKILLS</h2>
                <GlobalNav />

                <hr/>
                <h3 className = {styles.Heading}>EDUCATION</h3>
                    <div className = {styles.Education}>
                        
                        
                        {
                            myContext.colleges.map((college, index) => {
                                
                                return(
                                    <div className = {styles.College} key = {'college' + index + college.name}>
                                        <img src = {require(`../../assets/${college.image}`)} alt = "college"/>

                                        <div className = {styles.CollegeDetails}> 

                                            <label className = {styles.CollegeName}>{college.name.toUpperCase()}</label>
                                            <div className = {styles.CollegeDetailsRow}>
                                                
                                                <label>DEGREE: </label>
                                                <span>{college.degree}</span>
                                            </div>

                                            <div className = {styles.CollegeDetailsRow}>
                                                
                                                <label>CONCENTRATION: </label>
                                                <span>{college.concentration}</span>
                                            </div>

                                            <div className = {styles.CollegeDetailsRow}>
                                                
                                                <label>DEGREE TYPE: </label>
                                                <span>{college.degreeType}</span>
                                            </div>

                                            <div className = {styles.CollegeDetailsRow}>
                                                
                                                <label>GPA: </label>
                                                <span>{college.gpa}</span>
                                            </div>

                                            <div className = {styles.CollegeDetailsRow}>
                                                
                                                <label>GRADUATED: </label>
                                                <span>{college.graduated}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>

                    
                    <h3 className = {styles.Heading}>SKILLSET</h3>
                
                    <div className = {styles.Table}>
                        <div className = {styles.Column}>
                            <h3>
                                LANGUAGES
                            </h3>

                            {myContext.skills.languages.map((language, index) =>
                            {
                              
                                return (
                                <div className = {styles.Skill} key = {'languageSkill' + index}>
                                    <label>{language}</label>
                                </div>);
                            })}
    
                        </div>
    
                        <div className = {styles.Column}>
                            <h3>
                                FRAMEWORKS
                            </h3>
    
                            {myContext.skills.frameworks.map((framework, index) =>
                            {
                              
                                return (
                                <div className = {styles.Skill} key = {'frameworkSkill' + index}>
                                    <label>{framework}</label>
                                </div>);
                            })}
                        </div>
    
                        <div className = {styles.Column}>
                            <h3>
                                DATABASES
                            </h3>

                            {myContext.skills.databases.map((database, index) =>
                            {
                              
                                return (
                                <div className = {styles.Skill} key = {'databaseSkill' + index}>
                                    <label>{database}</label>
                                </div>);
                            })}                          
                        </div>
    
                        <div className = {styles.Column}>
                            <h3>
                                OS
                            </h3>
                            
                            {myContext.skills.os.map((os, index) =>
                            {
                              
                                return (
                                <div className = {styles.Skill} key = {'osSkill' + index}>
                                    <label>{os}</label>
                                </div>);
                            })} 
                           
                        </div>

                        <div className = {styles.Column}>
                            <h3>
                                PROJECT MANAGEMENT
                            </h3>
                            
                            {myContext.skills.projectManagement.map((projectManagement, index) =>
                            {
                              
                                return (
                                <div className = {styles.Skill} key = {'projectManagementSkill' + index}>
                                    <label>{projectManagement}</label>
                                </div>);
                            })} 
                           
                        </div>
                    </div>
                
            </div>
        </div>
    );
}

export default Skills;