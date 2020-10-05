import React, {useState, useEffect, useContext} from 'react';
import './GalleryImage.scss';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const GalleryImage = (props) =>
{
    //const [currentImage, updateCurrentImage] = useState(props.images);
    const [position, updatePosition] = useState(0);

    const cycleRight = () =>
    {
        if(position + 1 < props.images.length)
        {
            updatePosition(position + 1);
        }
        else
        {
            updatePosition(0);
        }
    };

    let images = props.images.map((object, index) => {
        if(object)
        {
            return (                        
                <CSSTransition 
                    key = {index}
                    classNames = "carousel"
                    timeout = {{enter: 750, exit: 750}}>
                    <div>
                        <div className = {'RightCornerBand'}>
                            Click Here
                        </div>
                        
                        <img 
                            className = {'CurrentImage'}
                            src = {require(`../../assets/${object}`)} />
                    </div>

                </CSSTransition>)
        }
    });

    return (
        <div className = 'GalleryImageContainer'>
                <div className = {'Right'} onClick = {cycleRight}>
                
                </div>



            <div className = {'GalleryImageContent'}>

                {images.length >= 1?
                    <TransitionGroup>
                        {images[position]}
                    </TransitionGroup>
                    :null}
            </div>
        </div>
    );
}

export default GalleryImage;