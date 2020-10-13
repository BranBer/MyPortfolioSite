import React, {useState, useContext} from 'react';
import styles from './Project.module.scss';
import {Link} from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';



const Project = (props) =>
{
    const [showRedirect, updateShowRedirect] = useState(false);

    let myContext = useContext(GlobalContext);
    let image = props.coverImage;

    return (
    <div className = {styles.Project} style = {image !==''?{backgroundImage: "url(" + require(`../../assets/${image}`) + ")", backgroundSize: 'length', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}:null}>
        <div className = {styles.ProjectDescription} onClick = {() => updateShowRedirect(!showRedirect)}>
            <h2>{props.title}</h2>
            
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
                        <label><a className = {styles.Link} href = {props.url} target = {'_blank'} rel="noopener noreferrer">{props.url}</a></label>
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
                                        <label><a className = {styles.Link} href = {props.url} target = {'_blank'} rel="noopener noreferrer">{url}</a></label>
                                        <div className = {styles.urlBackgroundBottom}/>
                                    </div>
                                );
                            })
                        
                    :null
                }

                

                <Link to = {"/project/" + props.title}><button onClick = {() => myContext.pageTransition()}>Read More</button></Link>
            </div>
        
    </div>);
}

export default Project;