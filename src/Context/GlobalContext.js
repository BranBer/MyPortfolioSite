import React, {useState} from 'react';

const GlobalContext = React.createContext();

const GlobalProvider = (props) =>
{
    let projects = [
        {   
            title: 'AirPnP',
            url: 'https://www.airpnp.org/',
            github: ['https://github.com/BranBer/AirPnP'],
            tags: ['backend', 'django', 'python'],
            images: ['']
        },
        {   
            title: 'How Safe is your drinking water?',
            url: '',
            github: ['https://github.com/BranBer/Radon-222-Decay-In-a-sample-of-water'],
            tags: ['research', 'wolfram mathematica'],
            images: ['']
        },
        {   
            title: 'Blog Site',
            url: '',
            github: ['https://github.com/BranBer/REACT-Blog-Site', 'https://github.com/BranBer/Django-Blog-Site-Backend'],
            tags: ['React.js', 'HTML', 'Javascript', 'CSS', 'Django', 'REST Framework'],
            images: ['']
        },
    ]

    const [value, updateValue] = useState({projects: projects});

    return (
    <GlobalContext.Provider value = {value}>
        {props.children}
    </GlobalContext.Provider>
    );
}

export {GlobalContext, GlobalProvider};