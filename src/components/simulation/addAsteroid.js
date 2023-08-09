import addMoon from "./addMoon";

// This function is the same than the one to add a planet, exept this one draw a shape insted of adding an img.
function addAsteroid (canvas, context, speedIndicator, distanceFromSun, size, color, bodyMoons) {

    // Place the object and define the moovement.
    context.save();
    context.translate(canvas.width / 2, canvas.height / 2);
    let time = new Date();

    // Below, 2 * PI transform a degre in radian. Depends on the speed indicator I select the spin'speed is gonna be hight or low.
    context.rotate(((2 * Math.PI) / (speedIndicator / 7)) * time.getDay() + ((2 * Math.PI) / (speedIndicator / 24)) * time.getHours() + ((2 * Math.PI) / (speedIndicator / 60)) * time.getMinutes() + ((2 * Math.PI) / speedIndicator) * time.getSeconds() + ((2 * Math.PI) / (speedIndicator * 1000)) * time.getMilliseconds());
    context.translate((canvas.width / distanceFromSun), 0); // Distance always depends to the screen size.

    // Draw the shape.
    context.beginPath();
    context.arc(0, 0, (canvas.width / size), 0, Math.PI * 2, false);
    context.fillStyle = color;
    context.strokeStyle = color; 
    context.fill();
    context.stroke();

    // Restore to precedent save.
    if (bodyMoons) {
        for (let index = 0; index < bodyMoons.length; index++) {
            addMoon(canvas, context, 5 - index, 6 + index, 3000, color) 
            context.restore();
        }
    }
    context.restore();
    context.restore();
}

export default addAsteroid;