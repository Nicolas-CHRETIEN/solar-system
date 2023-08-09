import React, { useState, useEffect } from 'react';

export default function ShowDwarfPlanets({ stateChanger }) {
  const [bodies, setBodies] = useState([]);
  const [showResults, setShowResults] = useState({ dwarfPlanets: false, moons: false, body: [] });
  const onClick = () => !showResults.dwarfPlanets ? setShowResults({ dwarfPlanets: true, moons: false }) : setShowResults({ dwarfPlanets: false, moons: false });
  
  useEffect(() => {
    fetch('https://api.le-systeme-solaire.net/rest/bodies/')
    .then((res) => res.json())
    .then((data) => {
      setBodies(data.bodies);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }, [showResults.dwarfPlanets, showResults.moons]);

  return(
    <div className='list'>
      <h2 className='h1 showPlanets show' onClick={ onClick }>Planètes naines</h2>
      { showResults.dwarfPlanets ?
        <div className='list-container'>
          {bodies.map((body) => {
            return(
              body.bodyType === 'Dwarf Planet' ?
                <div className='list planet' key={ body.id }>
                  <h2 className='title h4 showMoons show' onClick={ function () {
                    !showResults.moons ?
                    setShowResults({ dwarfPlanets: true, moons: true, body: [body.name] }) : 
                    showResults.moons && !showResults.body.includes(body.name) ?
                    setShowResults({ dwarfPlanets: true, moons: true, body: [...showResults.body, body.name] }) :
                    setShowResults({ dwarfPlanets: true, moons: false, body: [] });
                  }}>{ body.id.charAt(0).toUpperCase() + body.id.slice(1) }</h2>
                  <button className='show-details-button' onClick={stateChanger.bind(this, body.id)}><strong>+</strong></button>
                  { showResults.moons && showResults.body.includes(body.name) ?
                    <div className='list-container'>
                      {bodies.map((bodyMoon) => {
                        return(
                          bodyMoon.bodyType === 'Moon' ?
                            bodyMoon.aroundPlanet.planet === body.name.toLowerCase() || "la " + bodyMoon.aroundPlanet.planet === body.name.toLowerCase() ?
                              <div className='list moon' key={ bodyMoon.id }>
                                <h3 className='h6 moon-title'>{ bodyMoon.id.charAt(0).toUpperCase() + bodyMoon.id.slice(1) }</h3>
                                <button className='show-details-button' onClick={ stateChanger.bind(this, bodyMoon.id) }><strong>+</strong></button>
                              </div>
                            : null
                          : null
                        );
                      })}
                    </div> 
                  : null }
                </div>
              : null
            );
          })}
        </div>
      : null }
    </div>
  )
}