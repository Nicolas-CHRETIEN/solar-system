import './ShowItem.css';
import React, { useState, useEffect } from 'react';

export default function ShowItem({ item }) {
    const [body, setBody] = useState([]);
    
    useEffect(() => {
      fetch('https://api.le-systeme-solaire.net/rest/bodies/' + item)
      .then((res) => res.json())
      .then((data) => {
        setBody(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    }, [item]);

    return(
        !body ? <h3>Chargement...</h3> :
        <div className='middle'>
            <h2 className='h1'>{ body.name }</h2>
            <p>{ body.aroundPlanet ?
            'type d\'objet: lune de ' + body.aroundPlanet.planet
            : body.bodyType === 'Asteroid' ?
            'type d\'objet: Asteroïde'
            : body.bodyType === 'Planet' ?
            'type d\'objet: Planète'
            : body.bodyType === 'Dwarf Planet' ?
            'type d\'objet: Planète naine'
            : body.bodyType === 'Comet' ?
            'type d\'objet: Comète'
            : body.bodyType === 'Star' ?
            'type d\'objet: Etoile' : 'type d\'objet: Objet inconu' }</p>
            {/* <p>masse: { body.mass.massValue } X 10^{ body.mass.massExponent } kg</p>
            <p>volume: { body.vol.volValue } X 10^{ body.vol.volExponent } km3</p> */}
            <p>rayon: { body.equaRadius } km</p>
            <p>demi grand axe { body.semimajorAxis } km</p>
            <p>vitesse d'échapement { body.escape } m/s</p>
            <p>période de rotation autour { body.name === 'soleil' ? 'du centre de la voie lactée: 200 milions d\'années' : !body.aroundPlanet ? 'du soleil: ' + body.sideralOrbit + ' jour(s)' : body.aroundPlanet.planet === 'terre' ? 'de la terre' : 'de ' + body.aroundPlanet.planet + ': ' + body.sideralOrbit + ' jour(s)' }</p>
            <p>durée d'une rotation sur lui même { body.sideralRotation + ' heure(s)' }</p>
            <p>découvert par { body.discoveredBy } le { body.discoveryDate }</p>
        </div>
    )
}