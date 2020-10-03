import React, {useContext} from 'react';
import styles from './GlobalNav.module.scss';

import {Link} from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';

const GlobalNav = () =>
{
    let myContext = useContext(GlobalContext);

    return (
        <div className = {styles.NavBar}>
            <div className = {styles.NavOptionContainer}>
                <Link to = '/' style = {{textDecoration: 'none'}}>
                    <div className = {styles.NavUpper} />
                    <span className = {styles.NavOption} onClick = {()=>myContext.pageTransition()}>HOME</span>
                    <div className = {styles.NavLower} />
                </Link>
            </div>

            <div className = {styles.NavOptionContainer}> 
                <Link to = '/projects' style = {{textDecoration: 'none'}}>
                    <div className = {styles.NavUpper} />
                    <span className = {styles.NavOption} onClick = {()=>myContext.pageTransition()}>PROJECTS</span>
                    <div className = {styles.NavLower} />
                </Link>
            </div>

            <div className = {styles.NavOptionContainer}>                
                <Link to = '/skills' style = {{textDecoration: 'none'}} >
                    <div className = {styles.NavUpper} />
                    <span className = {styles.NavOption} onClick = {()=>myContext.pageTransition()}>SKILLS</span>
                    <div className = {styles.NavLower} />
                </Link>
            </div>

            <div className = {styles.NavOptionContainer}>
                <Link to = '/contact' style = {{textDecoration: 'none'}}>
                    <div className = {styles.NavUpper} />
                    <span className = {styles.NavOption} onClick = {()=>myContext.pageTransition()}>CONTACT</span>
                    <div className = {styles.NavLower} />
                </Link>
            </div>
        </div>
    );
}

export default GlobalNav;