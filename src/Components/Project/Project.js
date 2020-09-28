import React, {useState, useEffect, useContext} from 'react';
import styles from './Project.module.scss';
import {Redirect} from 'react-router-dom';

const Project = (props) =>
{
    const [showRedirect, updateShowRedirect] = useState(false);

    return (
    <div className = {styles.Project} style = {props.images.length > 0?{backgroundImage: 'url(' + props.images[0] + ')', backgroundSize: 'length', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}:null}>
        <div className = {styles.ProjectDescription} onClick = {() => updateShowRedirect(!showRedirect)}>
            <h2>{props.title}</h2>
            
            {/* /<hr/> */}

            <div className = {styles.Tags}>
                {props.tags!==undefined? 
                props.tags.map((tag, index) => {
                    return(<div key = {props.id + 'tag' + index} className = {styles.Tag}>{tag}</div>);
                })
                :null}
            </div>
            <hr/>

            
                {
                    props.url !== ''? 
                    <div className = {styles.url}>                        
                        <div className = {styles.urlBackgroundTop}/>
                        <label><a className = {styles.Link} href = {props.url} target = {'_blank'}>{props.url}</a></label>
                        <div className = {styles.urlBackgroundBottom}/>
                    </div>:null
                }

                {
                    props.githubLinks.length > 0?
                        
                            props.githubLinks.map((url, index) =>
                            {
                                return (
                                    <div className = {styles.url} key = {props.id + 'githubLink' + index}>
                                        <div className = {styles.urlBackgroundTop}/>
                                        <label><a className = {styles.Link} href = {props.url} target = {'_blank'}>{url}</a></label>
                                        <div className = {styles.urlBackgroundBottom}/>
                                    </div>
                                );
                            })
                        
                    :null
                }

                {/* <hr/>

                <Link to = {"/projects/" + ''}><button>Read More</button></Link> */}
            </div>
        
    </div>);
}

export default Project;