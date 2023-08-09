import React, { useState } from 'react';
import Moon from '../Moon/Moon.jsx';

const Body = ({ selectItem, body, allMoons }) => {
    const [showResults, setShowResults] = useState(false);
    const onClick = () => !showResults ? setShowResults(true) : setShowResults(false);

    return(
        <div className='list' key={ body.id }>
            <div className='body' key={ body.id }>
                <h2 className='title h4 showMoons show' onClick={ onClick }>{ body.id.charAt(0).toUpperCase() + body.id.slice(1) }</h2>
                <button className='show-details-button' onClick={ selectItem.bind(this, body.id) }><strong>+</strong></button>
                {showResults && body.moons &&
                <div className='list' key={ 'div' + body.id + 'moon(s)' }>
                    { body.moons && Array.isArray(body.moons) &&
                        body.moons.map((moon) => {
                            return(
                                <Moon selectItem={selectItem} moon={moon} allMoons={allMoons} key={'moon' + moon.moon}/>
                            )
                        })
                    }
                </div>}
            </div>
        </div>
    )
}

export default Body;