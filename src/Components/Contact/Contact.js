import React, {useState, useEffect, useContext} from 'react';
import {GlobalContext} from '../../Context/GlobalContext';
import styles from './Contact.module.scss';

import GlobalNav from '../GlobalNav/GlobalNav';

const Contact = () =>
{
    let myContext = useContext(GlobalContext);

    return(
        <div className = {styles.ContactContainer}>

            <div className = {styles.Mercury}>
                <div className = {styles.MercuryContent}/>
            </div>

            <div className = {styles.Venus}>
                <div className = {styles.VenusContent}/>
            </div>

            <div className = {styles.Earth}>
                <div className = {styles.EarthContent}/>
            </div>

            <div className = {styles.Mars}>
                <div className = {styles.MarsContent}/>
            </div>

            <div className = {styles.Jupiter}>
                <div className = {styles.JupiterContent}/>
            </div>

            <div className = {styles.ContactContent}>
                <h1>CONTACT</h1>

                <GlobalNav/>

                <hr/>

                <p>If you would like to discuss commissioning me to create your project, you can reach out to me at:</p>
                
                <ul>
                    <li>brandonberke@gmail.com</li>
                </ul>
            
                <p>If you have an inquiry about possible employment, please reach out to me at:</p>
                <ul>
                    <li>brandonberke@gmail.com</li>
                    <li>(516)-303-2282</li>
                </ul>

                <p className = {styles.PersonalMessage}>I look forward to doing business with you :-)</p>
            </div>
        </div>
    );
}

export default Contact;