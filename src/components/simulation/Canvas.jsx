import React, { useRef, useEffect, useState } from 'react';
// import draw from './draw.jsx';
import './style.css';
import addPlanet from './addPlanet.js';
import addMoon from './addMoon.js';
import addAsteroid from './addAsteroid.js';
import addRing from './addRing.js';
import addUranusLikePlanet from './addUranusLikePlanet.js'
import addEarthLikePlanet from './addEarthLikePlanet.js';
import addJupiterLikePlanet from './addJupiterLikePlanet.js';
import addSingleSun from './addSingleSun.js'
import addTwoSuns from './addTwoSuns.js'
import useFetch from '../../hooks/useFetch';


export default function Canvas () {

    const canvasRef = useRef(null);

    function draw(context, canvas, bodies) {
        // console.log(bodies);

        // Clear old drawnings.
        context.clearRect(0, 0, context.canvas.width, context.canvas.height); // initiate canvas.
        context.globalCompositeOperation = 'destination-over';
        context.fillStyle = 'rgba(0, 0, 0, 0.3)';
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)

        // ----------------------------------------Mercury-------------------------------------------
        addPlanet(canvas, context, 14.45118, 30, 500, 'rgb(94, 122, 128)');
        context.restore();
        context.restore();

        // ----------------------------------------Venus----------------------------------------
        addPlanet(canvas, context, 36.90732, 20, 305, 'rgb(255, 215, 142)');
        context.restore();
        context.restore();

        // ----------------------------------------Earth----------------------------------------
        addEarthLikePlanet(canvas, context, 60, 0.5, 15, 300, 'rgb(26, 95, 241)', 'rgb(26, 241, 241)', 2);
        addMoon(canvas, context, 4.4882407344, -15, 900, 'rgb(238, 233, 188)');
        context.restore();
        context.restore();

        // ----------------------------------------Mars----------------------------------------
        addPlanet(canvas, context, 112.8384, 10, 440, 'rgb(181, 87, 51)');
        addMoon(canvas, context, 3, -8, 1600, 'rgb(181, 87, 51)');
        context.restore();
        addMoon(canvas, context, 9, -10, 1800, 'rgb(181, 87, 51)');
        context.restore();
        context.restore();


        // ----------------------------------------Asteroids's belt----------------------------------------
        for (let index = 0; index < bodies.length; index++) {
            addAsteroid(canvas, context, !bodies[index].sideralOrbit ? 150 : (bodies[index].sideralOrbit / 365.2563 * 60), bodies[index].semimajorAxis > 5000000000 ? 2.2 + 1 / (bodies[index].meanRadius) : 8 + (index / 40), bodies[index].meanRadius < 200 ? 1400 : ((1 / (bodies[index].meanRadius / 400)) * 1000), 'rgb(206, 226, 226)', bodies[index].moons); 
        }

        // ----------------------------------------Jupiter----------------------------------------
        addJupiterLikePlanet(context, canvas, 80, 6, 711.642, 2, 'rgb(230, 230, 230)', 'rgb(229, 199, 199)', 'rgb(255, 215, 142)', 'rgb(209, 155, 113)');
        addMoon(canvas, context, 5, -35, 950, 'rgb(172, 138, 94)');
        context.restore();
        addMoon(canvas, context, 9, -45, 1000, 'rgb(225, 251, 255)');
        context.restore();
        addMoon(canvas, context, 15, -55, 700, 'rgb(104, 77, 43)');
        context.restore();
        addMoon(canvas, context, 21.9, -65, 600, 'rgb(143, 132, 119)');
        context.restore();
        context.restore();



        // ----------------------------------------Saturn----------------------------------------
        addPlanet(canvas, context, 1346.616, 4, 150, 'rgb(255, 240, 173)');
        addRing(context, 150, 2, 19, 'rgb(255, 240, 173)');
        addRing(context, 150, 4, 23.5, 'rgb(255, 240, 173)');
        addRing(context, 150, 1, 27, 'rgb(255, 240, 173)');
        addMoon(canvas, context, 5, -29, 1900, 'rgb(250, 230, 163)');
        context.restore();
        addMoon(canvas, context, 9.3, -35, 1300, 'rgb(240, 220, 153)');
        context.restore();
        addMoon(canvas, context, 12, -42, 1000, 'rgb(225, 220, 233)');
        context.restore();
        addMoon(canvas, context, 18.4, -48, 1000, 'rgb(200, 200, 163)');
        context.restore();
        addMoon(canvas, context, 23, -56, 900, 'rgb(155, 140, 153)');
        context.restore();
        addMoon(canvas, context, 27, -63, 800, 'rgb(155, 180, 153)');
        context.restore();
        addMoon(canvas, context, 33, -73, 800, 'rgb(225, 220, 253)');
        context.restore();
        addMoon(canvas, context, 38, -86, 800, 'rgb(155, 180, 173)');
        context.restore();
        context.restore();

        // ----------------------------------------Uranus----------------------------------------
        addUranusLikePlanet(canvas, context, 5042.928, 3, 210, 'rgb(120, 239, 205)', 3, 10, 'rgba(220, 239, 205, 0.4)');
        context.translate(10, 0);
        addMoon(canvas, context, 28, 28, 900, 'rgb(210, 229, 195)');
        context.restore();
        addMoon(canvas, context, 19, 30, 1000, 'rgb(200, 200, 200)');
        context.restore();
        addMoon(canvas, context, 12.5, 31.6, 1000, 'rgb(90, 209, 195)');
        context.restore();
        addMoon(canvas, context, 9, 32, 1200, 'rgb(80, 199, 215)');
        context.restore();
        addMoon(canvas, context, 5, 30, 1400, 'rgb(40, 159, 115)');
        context.restore();
        context.restore(); // I need a third restore() here because if I put only two Neptune code is based on Uranus position.


        // ----------------------------------------Neptune----------------------------------------
        addPlanet(canvas, context, 9892.14, 2.25, 200, 'rgb(62, 107, 255)');
        addMoon(canvas, context, 6, -20, 1000, 'rgb(102, 107, 115)');
        context.restore();
        addMoon(canvas, context, -26.5, -40, 800, 'rgb(62, 107, 155)');
        context.restore();
        context.restore();

        // ----------------------------------------Kuiper's belt----------------------------------------
        

        // ----------------------------------------Pluto----------------------------------------
        addAsteroid(canvas, context, 14864.4, 2, 500, "rgb(191, 240, 255)");

        // ----------------------------------------Haumea----------------------------------------
        addAsteroid(canvas, context, 15000, 1.8, 700, "rgb(191, 240, 255)");

        // ----------------------------------------Eris----------------------------------------
        addAsteroid(canvas, context, 15120, 1.5, 700, "rgb(191, 240, 255)");

        // ----------------------------------------Makemake----------------------------------------
        addAsteroid(canvas, context, 15352.6, 1.2, 800, "rgb(191, 240, 255)");

        // ----------------------------------------random asteroids----------------------------------------


        // ----------------------------------------Draw the sun----------------------------------------
        context.restore();
        
        addSingleSun(canvas, context, 30, 'rgb(255, 217, 0)', 'rgba(250, 108, 20, 0.7)');

        // Add the orbits
        context.beginPath();
        context.strokeStyle = "rgba(202, 208, 208, 0.4)";
        context.moveTo(canvas.width / 2 + canvas.width / 10, canvas.width / 2);
        context.arc(canvas.width / 2, canvas.height / 2, (canvas.width / 10), 0, Math.PI * 2, false); // Mars's orbit.
        context.moveTo(canvas.width / 2 + canvas.width / 30, canvas.width / 2);
        context.arc(canvas.width / 2, canvas.height / 2, (canvas.width / 30), 0, Math.PI * 2, false); // Mercury's orbit.
        context.moveTo(canvas.width / 2 + canvas.width / 20, canvas.width / 2);
        context.arc(canvas.width / 2, canvas.height / 2, (canvas.width / 20), 0, Math.PI * 2, false); // Venus's orbit.
        context.moveTo(canvas.width / 2 + canvas.width / 15, canvas.width / 2);
        context.arc(canvas.width / 2, canvas.height / 2, (canvas.width / 15), Math.PI * 2, 0, false); // Earth's orbit.
        context.moveTo(canvas.width / 2 + canvas.width / 6, canvas.width / 2);
        context.arc(canvas.width / 2, canvas.height / 2, (canvas.width / 6), Math.PI * 2, 0, false); // Jupiter's orbit.
        context.moveTo(canvas.width / 2 + canvas.width / 4, canvas.width / 2);
        context.arc(canvas.width / 2, canvas.height / 2, (canvas.width / 4), Math.PI * 2, 0, false); // Saturn's orbit.
        context.moveTo(canvas.width / 2 + canvas.width / 3, canvas.width / 2);
        context.arc(canvas.width / 2, canvas.height / 2, (canvas.width / 3), Math.PI * 2, 0, false); // Uranus's orbit.
        context.moveTo(canvas.width / 2 + canvas.width / 2.25, canvas.width / 2);
        context.arc(canvas.width / 2, canvas.height / 2, (canvas.width / 2.25), Math.PI * 2, 0, false); // Neptune's orbit.
        context.stroke();
    }
            
    
    const { result, isLoading, isError } = useFetch(`https://api.le-systeme-solaire.net/rest/bodies/`);
    const asteroids = result.filter(body => body.bodyType === 'Asteroid');

    useEffect(() => {

   

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = 2000;
        canvas.height = 2000;



        //draw
        let animationFrameId

        const render = () => {
        draw(context, canvas, asteroids);
        animationFrameId = window.requestAnimationFrame(render);
        }

      
        !isLoading && asteroids.length > 0 && render()

        return () => {
        window.cancelAnimationFrame(animationFrameId)
        }

    }, [draw])
    
    return <canvas ref={canvasRef}/>
}