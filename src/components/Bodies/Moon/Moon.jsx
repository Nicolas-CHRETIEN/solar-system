import React from 'react';

const Moon = ({ selectItem, moon, allMoons }) => {
    function isMoon(target) {
        return target.name === moon.moon;
    }
    
    const currentMoon = allMoons.find(isMoon);
    
    return(
        <div className='moon' key={ currentMoon.id }>
            <h2 className='title h4 showMoons show'>{ currentMoon.id }</h2>
            <button className='show-details-button' onClick={ selectItem.bind(this, currentMoon.id) }><strong>+</strong></button>
        </div>
    )
}

export default Moon;