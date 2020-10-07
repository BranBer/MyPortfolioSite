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
            images: ['stars.png', 'spiralgalaxy.png', 'sunsurface.jpg'],
            description: 'A portfolio that utlizes React\'s context API, React Transition Group, React Router, AJAX, and advanced CSS Techniques. This portfolio is a display of its creator\'s creative and technical abilities. These abilities could be yours if you go to the portfolio\'s contact page and contact him.'
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
            title: 'How Safe is your drinking water',
            url: '',
            github: ['https://github.com/BranBer/Radon-222-Decay-In-a-sample-of-water'],
            tags: ['research', 'wolfram mathematica'],
            coverImage: 'watersafetymathematica.png',
            images: [],
            description: ''
        },
        {   
            title: 'Blog Site',
            url: '',
            github: ['https://github.com/BranBer/REACT-Blog-Site', 'https://github.com/BranBer/Django-Blog-Site-Backend'],
            tags: ['React.js', 'HTML', 'Javascript', 'CSS', 'Django', 'REST Framework'],
            coverImage: '',
            images: [],
            description: ''
        },
    ];

    let skills = {
        languages: ['HTML', 'Javascript', 'CSS', 'SCSS', 'SQL', 'Python', 'C++', 'C#', 'XML', 'Mathematica'],
        frameworks: ['Django', 'Django REST Framework', 'React.JS'],
        databases: ['MySQL Server', 'Microsoft SQL-Server', 'Django ORM', 'MariaDB'],
        os: ['Windows 10', 'UNIX/LINUX', 'Debian', 'Ubuntu'],
        projectManagement: ['Git', 'Trello', 'Amazon Web Services'],
    };
    
    let colleges = [
        {
            image: 'fsclogo.jpg',
            name: 'Farmingdale State College',
            degree: 'Computer Science and Information Systems',
            concentration: 'Computer Programming',
            degreeType: 'Bachelor of Science',
            gpa: 3.53,
            graduated: 'May 2020'
        }
    ]

    
    const setPageTransition = (transition) =>
    {
        let myValues = value;

        myValues.pageTransition = transition;
        updateValue(myValues);
    }

    const [value, updateValue] = useState({
        projects: projects, 
        skills: skills, 
        colleges: colleges,
        email: 'brandonberke@gmail.com',
        setPageTransition: setPageTransition,
        pageTransition: null,
    });

    return (
    <GlobalContext.Provider value = {value}>
        {props.children}
    </GlobalContext.Provider>
    );
}

export {GlobalContext, GlobalProvider};