import React, {useState} from 'react';

const GlobalContext = React.createContext();

const GlobalProvider = (props) =>
{
    let projects = [
        {   
            title: 'My Portfolio',
            url: '',
            github: ['https://github.com/BranBer/MyPortfolioSite'],
            tags: ['frontend', 'React.js', 'python', 'HTML', 'Javascript', 'CSS',],
            coverImage: 'PortfolioPic.PNG',
            images: []
        },
        {   
            title: 'AirPnP',
            url: 'https://www.airpnp.org/',
            github: ['https://github.com/BranBer/AirPnP'],
            tags: ['backend', 'django', 'python'],
            coverImage: 'AirPnP.png',
            images: []
        },
        {   
            title: 'How Safe is your drinking water?',
            url: '',
            github: ['https://github.com/BranBer/Radon-222-Decay-In-a-sample-of-water'],
            tags: ['research', 'wolfram mathematica'],
            coverImage: 'watersafetymathematica.png',
            images: []
        },
        {   
            title: 'Blog Site',
            url: '',
            github: ['https://github.com/BranBer/REACT-Blog-Site', 'https://github.com/BranBer/Django-Blog-Site-Backend'],
            tags: ['React.js', 'HTML', 'Javascript', 'CSS', 'Django', 'REST Framework'],
            coverImage: '',
            images: []
        },
    ];

    let skills = {
        languages: ['HTML', 'Javascript', 'CSS', 'SCSS', 'SQL', 'Python', 'C++', 'C#', 'XML', 'Mathematica'],
        frameworks: ['Django', 'Django REST Framework', 'React.JS'],
        databases: ['MySQL Server', 'Microsoft SQL-Server', 'Django ORM', 'MariaDB'],
        os: ['Windows 10', 'UNIX/LINUX', 'Debian', 'Ubuntu'],
        projectManagement: ['Git', 'Trello', 'Amazon Web Services'],
    };

    
    const setPageTransition = (transition) =>
    {
        let myValues = value;

        myValues.pageTransition = transition;
        updateValue(myValues);
    }

    const [value, updateValue] = useState({
        projects: projects, 
        skills: skills, 
        email: 'brandonberke@gmail.com',
        setPageTransition: setPageTransition,
        pageTransition: null
    });

    return (
    <GlobalContext.Provider value = {value}>
        {props.children}
    </GlobalContext.Provider>
    );
}

export {GlobalContext, GlobalProvider};