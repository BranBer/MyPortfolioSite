import React, {useContext} from 'react';
import styles from './GlobalNav.module.scss';

import {Link} from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';

const GlobalNav = () =>
{
    let myContext = useContext(GlobalContext);

    return (
        <div className = {styles.NavBar}>
            <Link to = '/' style = {{textDecoration: 'none'}}>
                <span className = {styles.NavOption} onClick = {()=>myContext.pageTransition()}>HOME</span>
            </Link>

            <Link to = '/projects' style = {{textDecoration: 'none'}}>
                <span className = {styles.NavOption} onClick = {()=>myContext.pageTransition()}>PROJECTS</span>
            </Link>

            <Link to = '/skills' style = {{textDecoration: 'none'}}>
                <span className = {styles.NavOption} onClick = {()=>myContext.pageTransition()}>SKILLS</span>
            </Link>

            <Link to = '/contact' style = {{textDecoration: 'none'}}>
                <span className = {styles.NavOption} onClick = {()=>myContext.pageTransition()}>CONTACT</span>
            </Link>
        </div>
    );
}

export default GlobalNav;