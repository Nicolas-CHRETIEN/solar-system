import addShadow from './addShadow';
import drawFilledArc from './drawFilledArc';
import addRingSideView from './addRingSideView.js'

const addJupiterLikePlanet = (context, canvas, width, distanceFromSun, speedIndicator, spinIndicator , color1, color2, color3, color4) => {
    context.save(); // Save to be able to restore here if a moon need to be added.
    context.translate(canvas.width / 2, canvas.height / 2); // Start at the center of the screen.
    let time = new Date(); // Define new time.

    // Below, 2 * PI transform a degre in radian. Depends on the speed indicator I select the spin'speed is gonna be hight or low.
    context.rotate(((2 * Math.PI) / (speedIndicator / 7)) * time.getDay() + ((2 * Math.PI) / (speedIndicator / 24)) * time.getHours() + ((2 * Math.PI) / (speedIndicator / 60)) * time.getMinutes() + ((2 * Math.PI) / speedIndicator) * time.getSeconds() + ((2 * Math.PI) / (speedIndicator * 1000)) * time.getMilliseconds() ); // SpeedIndicator is used to adapt speed of the objects based on earth speed. Earth takes 60 seconds to turn around the sun. For exemple if an object is two times slower than earth, its speedIndicator is gonna be 30.

    context.translate((canvas.width / distanceFromSun), 0); // Moove Earth to the corresponding distance from the center.

    const borderPlanet = canvas.width / width;
    const middlePlanet = (canvas.width / width) / 2;
    const thirdLevelPlanet = ((canvas.width / width) / 5) * 4;

    addShadow(canvas, context, width); // Component used to add a triangle shadow shape to the planets.
    context.save();

    context.rotate(((2 * Math.PI) / (spinIndicator / 7)) * time.getDay() + ((2 * Math.PI) / (spinIndicator / 24)) * time.getHours() + ((2 * Math.PI) / (spinIndicator / 60)) * time.getMinutes() + ((2 * Math.PI) / spinIndicator) * time.getSeconds() + ((2 * Math.PI) / (spinIndicator * 1000)) * time.getMilliseconds());

    context.beginPath();
    context.lineWidth =5;
    context.strokeStyle = color1;
    context.lineWidth =1;
    context.arc(0, 0, middlePlanet / 2, Math.PI * 2, 0, false);
    context.fillStyle = color1;
    context.fill();
    context.stroke();
    context.lineWidth =middlePlanet / 2;
    context.strokeStyle = color4;
    context.bezierCurveTo(middlePlanet - middlePlanet / 4, 0, middlePlanet - middlePlanet / 4, -middlePlanet, 0, -middlePlanet + middlePlanet / 4);
    context.bezierCurveTo(-middlePlanet + middlePlanet / 4, -middlePlanet + middlePlanet / 4, -middlePlanet, 0, -middlePlanet + middlePlanet / 4, 0);
    context.bezierCurveTo(-middlePlanet + middlePlanet / 4, 0, -middlePlanet + middlePlanet / 4, middlePlanet, 0, middlePlanet - middlePlanet / 4);
    context.bezierCurveTo(middlePlanet - middlePlanet / 4, middlePlanet - middlePlanet / 4, middlePlanet, 0, middlePlanet - middlePlanet / 4, 0);
    context.fill();
    context.stroke();
    context.strokeStyle = color3;
    context.arc(0, 0, middlePlanet, Math.PI * 2, 0, false);
    context.stroke();
    context.strokeStyle = color2;
    context.bezierCurveTo(thirdLevelPlanet - thirdLevelPlanet / 4, 0, thirdLevelPlanet + thirdLevelPlanet / 4, -thirdLevelPlanet, 0, -thirdLevelPlanet + thirdLevelPlanet / 4);
    context.bezierCurveTo(-thirdLevelPlanet + thirdLevelPlanet / 4, -thirdLevelPlanet - thirdLevelPlanet / 4, -thirdLevelPlanet, 0, -thirdLevelPlanet + thirdLevelPlanet / 4, 0);
    context.bezierCurveTo(-thirdLevelPlanet + thirdLevelPlanet / 4, 0, -thirdLevelPlanet - thirdLevelPlanet / 4, thirdLevelPlanet, 0, thirdLevelPlanet - thirdLevelPlanet / 4);
    context.bezierCurveTo(thirdLevelPlanet - thirdLevelPlanet / 4, thirdLevelPlanet + thirdLevelPlanet / 4, thirdLevelPlanet, 0, thirdLevelPlanet - thirdLevelPlanet / 4, 0);
    context.stroke();
    context.strokeStyle = color3;
    context.arc(0, 0, thirdLevelPlanet, Math.PI * 2, 0, false);
    context.stroke();
    context.lineWidth = middlePlanet/4;
    context.strokeStyle = color4;
    context.arc(0, 0, borderPlanet, Math.PI * 2, 0, false);
    context.stroke();
    context.lineWidth =1;



    context.lineWidth =1;
    
    drawFilledArc (canvas, context, 0, 0, width, color3) 
    context.restore(); // Save and restore to before adding the spinning image so that the moons don't be impacted by the spin.



    const JupiterPositionX = 1000 + (2000/6) * Math.cos(Math.PI * (2 / (711.642 / ((time.getDay() * 7) + (time.getHours() * 24) + (time.getMinutes() * 60) + time.getSeconds() + (time.getMilliseconds() / 1000)))));
    const JupiterPositionY = 1000 + (2000/6) * Math.sin(Math.PI * (2 / (711.642 / ((time.getDay() * 7) + (time.getHours() * 24) + (time.getMinutes() * 60) + time.getSeconds() + (time.getMilliseconds() / 1000)))));
}

export default addJupiterLikePlanet;