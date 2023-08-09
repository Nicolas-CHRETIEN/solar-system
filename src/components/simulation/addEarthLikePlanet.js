import addShadow from './addShadow';
import drawFilledArc from './drawFilledArc';

// Create a new planet with an image.
function addEarthLikePlanet(canvas, context, speedIndicator, spinIndicator, distanceFromSun, width, OceansColor, groundColor, oceanLevel) { 
    context.save(); // Save to be able to restore here if a moon need to be added.
    context.translate(canvas.width / 2, canvas.height / 2); // Start at the center of the screen.
    let time = new Date(); // Define new time.

    context.rotate(((2 * Math.PI) / (speedIndicator / 7)) * time.getDay() + ((2 * Math.PI) / (speedIndicator / 24)) * time.getHours() + ((2 * Math.PI) / (speedIndicator / 60)) * time.getMinutes() + ((2 * Math.PI) / speedIndicator) * time.getSeconds() + ((2 * Math.PI) / (speedIndicator * 1000)) * time.getMilliseconds() );

    context.translate((canvas.width / distanceFromSun), 0); // Moove Earth to the corresponding distance from the center.

    addShadow(canvas, context, width); // Component used to add a triangle shadow shape to the planets.

    context.save();

    context.rotate(((2 * Math.PI) / (spinIndicator / 7)) * time.getDay() + ((2 * Math.PI) / (spinIndicator / 24)) * time.getHours() + ((2 * Math.PI) / (spinIndicator / 60)) * time.getMinutes() + ((2 * Math.PI) / spinIndicator) * time.getSeconds() + ((2 * Math.PI) / (spinIndicator * 1000)) * time.getMilliseconds());

    const diameter = canvas.width / width;
    context.beginPath();
    context.strokeStyle = groundColor;
    context.fillStyle = groundColor;
    context.bezierCurveTo(0, diameter, diameter / oceanLevel, diameter, 0, 0);
    context.lineTo(0, diameter / oceanLevel);
    context.lineTo(diameter / oceanLevel, diameter / oceanLevel);
    context.lineTo(diameter / oceanLevel, -diameter / oceanLevel);
    context.bezierCurveTo(0, 0, diameter, -diameter, diameter, 0);
    context.bezierCurveTo(diameter, 0, diameter, diameter, 0, diameter);
    context.fill();
    context.lineTo(-diameter / oceanLevel, -diameter / oceanLevel);
    context.bezierCurveTo(0, -diameter, -diameter / oceanLevel, -diameter, 0, 0);
    context.lineTo(-diameter/oceanLevel, diameter / oceanLevel);
    context.bezierCurveTo(0, 0, -diameter, diameter, -diameter, 0);
    context.lineTo(0, -diameter/oceanLevel);
    context.bezierCurveTo(0, 0, -diameter, diameter, -diameter, 0);
    context.fill();
    context.stroke();

    drawFilledArc (canvas, context, 0, 0, width, OceansColor) 
    context.restore(); // Save and restore to before adding the spinning image so that the moons don't be impacted by the spin.

    const PlanetPositionX = 1000 + (2000 / distanceFromSun) * Math.cos(Math.PI * (2 / (speedIndicator / ((time.getDay() * 7) + (time.getHours() * 24) + (time.getMinutes() * 60) + time.getSeconds() + (time.getMilliseconds() / 1000)))));
    const PlanetPositionY = 1000 + (2000 / distanceFromSun) * Math.sin(Math.PI * (2 / (speedIndicator / ((time.getDay() * 7) + (time.getHours() * 24) + (time.getMinutes() * 60) + time.getSeconds() + (time.getMilliseconds() / 1000)))));
}

export default addEarthLikePlanet;