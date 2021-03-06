import React from 'react';
import styles from './Intro.module.scss';
import GlobalNav from '../GlobalNav/GlobalNav';

const Intro = (props) =>
{
    let linkedinurl = "https://www.linkedin.com/in/brandon-berke-84111b199/";
    let facebookurl = "https://www.facebook.com/brandon.berke.3/";
    let twitterurl = "https://twitter.com/_Branberry";
    let githuburl = "https://github.com/BranBer";
    return (
        <div className = {styles.IntroContainer}>
            
            {/*Main Div*/}
            <div className = {styles.IntroBackground}>
                <div className = {styles.IntroContent}>
                    <h1>BRANBER.IO</h1>
                    
                    <p>
                        Hello! My name is Brandon. I am a New York based freelance web developer,
                        If you are seeing this right now, you made the right choice. I will make 
                        your creative visions come true in the form of a polished and elegant 
                        web service. 
                    </p>
    
                    <p>
                        I have a wide skillset that includes, but is not limited to 
                        HTML + CSS + Javascript, Graphic Design, Django, REST APIs, 
                        and Linux server administraion.
                    </p>
    
    
                    <div className = {styles.ImageContainer}/>
    
                    {/*Social Media Links*/}
                    <div className = {styles.SocialMediaContainer}>
                        <a href = {linkedinurl} target = "_blank" rel="noopener noreferrer"><div className = {styles.SocialMediaIcon} id = {styles.linkedin} /></a>
                        <a href = {facebookurl} target = "_blank" rel="noopener noreferrer"><div className = {styles.SocialMediaIcon} id = {styles.facebook}/></a>
                        <a href = {twitterurl}  target = "_blank" rel="noopener noreferrer"><div className = {styles.SocialMediaIcon} id = {styles.twitter}/></a>
                        <a href = {githuburl}   target = "_blank" rel="noopener noreferrer"><div className = {styles.SocialMediaIcon} id = {styles.github}/></a>
                    </div>
                    
                    <hr/>
    
                    {/*Nav Bar*/}
    
                    <GlobalNav/>
                    <br/>
                </div>
            </div>
        </div>
    );
}

export default Intro;