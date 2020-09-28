import React, {useState, useEffect, useContext} from 'react';
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