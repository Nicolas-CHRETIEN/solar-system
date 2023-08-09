import addShadow from './addShadow';
import drawFilledArc from './drawFilledArc';

// Create a new planet with an image.
function addPlanet(canvas, context, speedIndicator, distanceFromSun, width, color) { 
    context.save(); // Save to be able to restore here if a moon need to be added.
    context.translate(canvas.width / 2, canvas.height / 2); // Start at the center of the screen.
    let time = new Date(); // Define new time.

    // Below, 2 * PI transform a degre in radian. Depends on the speed indicator I select the spin'speed is gonna be hight or low.
    context.rotate(((2 * Math.PI) / (speedIndicator / 7)) * time.getDay() + ((2 * Math.PI) / (speedIndicator / 24)) * time.getHours() + ((2 * Math.PI) / (speedIndicator / 60)) * time.getMinutes() + ((2 * Math.PI) / speedIndicator) * time.getSeconds() + ((2 * Math.PI) / (speedIndicator * 1000)) * time.getMilliseconds() ); // SpeedIndicator is used to adapt speed of the objects based on earth speed. Earth takes 60 seconds to turn around the sun. For exemple if an object is two times slower than earth, its speedIndicator is gonna be 30.

    context.translate((canvas.width / distanceFromSun), 0); // Moove Earth to the corresponding distance from the center.

    addShadow(canvas, context, width); // Component used to add a triangle shadow shape to the planets.

    context.save();
    // drawSpinningImage(canvas, context, imgName, width, time, spinIndicator);
    drawFilledArc (canvas, context, 0, 0, width, color)
    context.restore(); // Save and restore to before adding the spinning image so that the moons don't be impacted by the spin.

    const PlanetPositionX = 1000 + (2000 / distanceFromSun) * Math.cos(Math.PI * (2 / (speedIndicator / ((time.getDay() * 7) + (time.getHours() * 24) + (time.getMinutes() * 60) + time.getSeconds() + (time.getMilliseconds() / 1000)))));
    const PlanetPositionY = 1000 + (2000 / distanceFromSun) * Math.sin(Math.PI * (2 / (speedIndicator / ((time.getDay() * 7) + (time.getHours() * 24) + (time.getMinutes() * 60) + time.getSeconds() + (time.getMilliseconds() / 1000)))));
}

export default addPlanet;