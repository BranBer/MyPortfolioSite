import React from 'react';
import styles from './GlobalNav.module.scss';

import {Link} from 'react-router-dom';

const GlobalNav = () =>
{
    return (
        <div className = {styles.NavBar}>
            <Link to = '/' style = {{textDecoration: 'none'}}>
                <span className = {styles.NavOption}>HOME</span>
            </Link>

            <Link to = '/projects' style = {{textDecoration: 'none'}}>
                <span className = {styles.NavOption}>PROJECTS</span>
            </Link>

            <Link to = '/skills' style = {{textDecoration: 'none'}}>
                <span className = {styles.NavOption}>SKILLS</span>
            </Link>

            <Link to = '/contact' style = {{textDecoration: 'none'}}>
                <span className = {styles.NavOption}>CONTACT</span>
            </Link>
        </div>
    );
}

export default GlobalNav;