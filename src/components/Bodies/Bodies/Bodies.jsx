import '../Bodies/Bodies.css';
import React, { useState, useEffect } from 'react';
import BodyType from './BodyType.jsx';
import ShowItem from '../showItem/ShowItem.jsx';
import useFetch from '../../../hooks/useFetch';

const Bodies = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const { result, isLoading, isError } = useFetch(`https://api.le-systeme-solaire.net/rest/bodies/`);
    const ceres = (body) => body.id === 'ceres';
    const ceresUpdate = () => { result[result.findIndex(ceres)].bodyType = 'Dwarf Planet' };
    // Update API datas as Ceres is no longer considered as an asteroid.
    useEffect(() => {
        if(result.length > 0 && isLoading === false)
        ceresUpdate();
    }, [result, isLoading]);
    if (isLoading) {
        return <div className='loading'>Chargement...</div>;
    } else {

        return (<div className='mainBodiesWindow'>
            <aside className='aside'>
               
                <BodyType selectItem={setSelectedItem} bodies={result.filter(body => body.bodyType === 'Star')} name='Etoile(s)' allMoons={result.filter(body => body.bodyType === 'Moon')} />
                <BodyType selectItem={setSelectedItem} bodies={result.filter(body => body.bodyType === 'Planet')} name='Planète(s)' allMoons={result.filter(body => body.bodyType === 'Moon')} />
                <BodyType selectItem={setSelectedItem} bodies={result.filter(body => body.bodyType === 'Dwarf Planet')} name='Planète(s) naine(s)' allMoons={result.filter(body => body.bodyType === 'Moon')} />
                <BodyType selectItem={setSelectedItem} bodies={result.filter(body => body.bodyType === 'Asteroid')} name='Astéroïde(s)' allMoons={result.filter(body => body.bodyType === 'Moon')} />
                <BodyType selectItem={setSelectedItem} bodies={result.filter(body => body.bodyType === 'Comet')} name='Comète(s)' allMoons={result.filter(body => body.bodyType === 'Moon')} />
            </aside>
            <>
                {selectedItem &&
                    <ShowItem item={selectedItem} bodies={result} />
                }
            </>
        </div>)
    };

};

export default Bodies;
