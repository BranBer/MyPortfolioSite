import React, {useState, useEffect, useContext} from 'react';
import styles from './Project.module.scss';

const Project = (props) =>
{
    return (
    <div className = {styles.Project}>
        <div className = {styles.ProjectDescription}>
            <h2>Project</h2>
            
            <div className = {styles.Tags}>
                {props.tags!==undefined? 
                props.tags.map((tag, index) => {
                    return(<div key = {props.id + 'tag' + index} className = {styles.Tag}>{tag}</div>);
                })
                :null}
            </div>
        </div>
    </div>);
}

export default Project;