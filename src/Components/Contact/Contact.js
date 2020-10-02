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

                

                <p>If you would like to discuss commissioning me to create your project, or are reaching out for an employment opportunity, you can reach out to me at <span className = {styles.email}>brandonberke@gmail.com</span></p>
                <p className = {styles.PersonalMessage}>I look forward to doing business with you :-)</p>
                <br/>
                
            </div>
        </div>
    );
}

export default Contact;