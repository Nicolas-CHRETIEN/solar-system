import React, { useState } from 'react';
import Body from '../Body/Body.jsx';

const BodyType = ({ selectItem, bodies, name, allMoons }) => {
    const [showResults, setShowResults] = useState(false);
    const onClick = () => !showResults ? setShowResults(true) : setShowResults(false);

    return(
        <div className='list'>
            <h2 className='h1 showPlanets show' onClick={ onClick }>{name}</h2>
            {showResults &&
            bodies.map((body) => {
                return(
                    <Body selectItem={selectItem} body={body} allMoons={allMoons} key={name + body.id}/>
                )
            })}
        </div>  
    )
}  

export default BodyType;