import React, {useState} from 'react';

const GlobalContext = React.createContext();

const GlobalProvider = (props) =>
{
    let projects = [
        {
            title: 'My Portfolio',
            url: '',
            github: ['https://github.com/BranBer/MyPortfolioSite'],
            tags: ['frontend', 'React.js', 'HTML', 'Javascript', 'CSS'],
            coverImage: 'Project_Portfolio/PortfolioPic.PNG',
            images: [
                'Project_Portfolio/portfolioProjects.PNG',
                'Project_Portfolio/portfolioProject.PNG',
                'Project_Portfolio/portfolioSkills.PNG',
            ],
            description: 'A portfolio that utlizes React\'s context API, React Transition Group, React Router, Axios, and advanced CSS Techniques. This portfolio is a display of its creator\'s creative and technical abilities. These abilities could be yours if you go to the portfolio\'s contact page and contact him.'
        },
        {   
            title: 'AirPnP',
            url: 'https://www.airpnp.org/',
            github: ['https://github.com/BranBer/AirPnP'],
            tags: ['backend', 'django', 'python'],
            coverImage: 'AirPnP.png',
            images: [
                'Project_AirPnP/airpnp_login.PNG', 
                'Project_AirPnP/airpnp_home.PNG',
                'Project_AirPnP/airpnp_bathroom_registration.PNG',
                'Project_AirPnP/airpnp_user_info.PNG'],
            description: `It can be difficult and frustrating to have the urgent need to use the bathroom in a big city. And even more frustrating when you can't find one. With this web service, users are able to look up and reserve bathrooms at certain time slots that are listed near their current location. I single-handedly created the backend for this project in Django. Here I served REST API
            s using Django's REST Framework, and handled scheduling using crontabs and Django's ORM. Furthermore, I implemented models that allows Users to host bathrooms, reserve bathrooms, and modify their bathroom's available hours. All of this secured using Django Rest Framework Token Authentication.`
        },
        {   
            title: 'How Safe is your drinking water',
            url: '',
            github: ['https://github.com/BranBer/Radon-222-Decay-In-a-sample-of-water'],
            tags: ['research', 'wolfram mathematica'],
            coverImage: 'Project_Drinking_Water/watersafetymathematica.png',
            images: [
                'Project_Drinking_Water/waterQualityChart.PNG',
                'Project_Drinking_Water/waterqualityPoster.PNG'
            ],
            description: `ABSTRACT: We speculate that the EPA regulations contradict itself. The combined Radium-226 and Radium-228 maximum contaminant levels (MCL) are 5 picocuries/liter (pCi/L) such that it cannot exceed this amount. However, the Beta/Photon Radioactivity MCL states that the radioactive dose to any internal organ cannot exceed 4 millirems/year (mrem/y), and the 1991 proposal states that it cannot exceed that amount assuming an individual drinks an average of 2 liters of water a day. The contradiction lies in the fact that the 4 mrem/y MCL and Radium MCL do not account for secular equilibrium which states that at a certain time, all the decay rates of the isotopes in the decay chain are equal to each other; it also does not account for the fact that radioactive substances decay from parent isotopes into daughter isotopes at different rates (until enough time passes for secular equilibrium occur). Both of these factors means that if there is one of the isotopes present in a sample of water, there is also an amount of all of its parent isotopes and daughter isotopes present in that sample that are also radioactive. Once this soup of radioactive isotopes and water is ingested, the radioactive isotopes continue to decay even when inside of the body, and while some gets filtered out and excreted as waste, some of the radioactive isotopes lodge themselves inside of different organs, causing damage to tissues, and DNA; Which increase the risk for an individual to get cancer. These isotopes won’t just decay and become stable inside of the human body because for Uranium-238 and Thorium-232 to become stable and non-radioactive, it could take billions of years. These isotopes are the parents of Radium-226, and Radium-228. Our findings and calculations show that the radioactive dose due to ingesting 2 liters of water a day for a year on Long Island contaminated by Radium-226 and Radium-228 exceed the 4 mrem/y MCL even if it does not exceed the 5 pCi/L MCL for Radium. 
            `
        },
        {   
            title: 'Blog Site',
            url: '',
            github: ['https://github.com/BranBer/REACT-Blog-Site', 'https://github.com/BranBer/Django-Blog-Site-Backend'],
            tags: ['React.js', 'HTML', 'Javascript', 'CSS', 'Django', 'REST Framework'],
            coverImage: 'Project_Blog/BlogSiteAbout.PNG',
            images: [
                'Project_Blog/BlogSiteByYou.PNG',
                'Project_Blog/BlogPost.PNG',
                'Project_Blog/BlogSiteComments.PNG'
            ],
            description: `Certain social issues need a proper platform to be made more aware of. This platform comes equipped with a user authentication system where users can submit their own posts for review by an admin, a post liking system, user commenting, replies to commenting, a newsletter email subscription system, password recovery, email recovery, and tools for the admin to moderate comments, users and posts. The frontend was composed with React.js and utilizes the Context API, Hooks, Routing, React Lifecycle Manipluation, and Axios calls. All of this being powered by a Django backend that utlizes Django's Rest Framework, User Authentication, and Throttling capabilities. This site is a work in progress and is not currently in production, but you can expect it soon!`
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