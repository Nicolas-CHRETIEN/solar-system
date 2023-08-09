import addSingleSun from './addSingleSun.js';

const addTwoSuns = (canvas, context, width, speedIndicator, distanceBetweemBoth, sun1Color, solarWind1Color, sun2Color, solarWind2Color) => {
    context.restore();
    context.save();
    context.translate(canvas.width / 2, canvas.height / 2);

    let time = new Date(); // Define new time.

    context.rotate(((2 * Math.PI) / (speedIndicator / 7)) * time.getDay() + ((2 * Math.PI) / (speedIndicator / 24)) * time.getHours() + ((2 * Math.PI) / (speedIndicator / 60)) * time.getMinutes() + ((2 * Math.PI) / speedIndicator) * time.getSeconds() + ((2 * Math.PI) / (speedIndicator * 1000)) * time.getMilliseconds() );

    context.translate(canvas.width / distanceBetweemBoth / 2, 0); // Moove Earth to the corresponding distance from the center.

    addSingleSun(canvas, context, width, sun1Color, solarWind1Color);
    context.restore();

    context.save();
    context.translate(canvas.width / 2, canvas.height / 2);

    let time2 = new Date(); // Define new time.

    context.rotate(((2 * Math.PI) / (speedIndicator / 7)) * time2.getDay() + ((2 * Math.PI) / (speedIndicator / 24)) * time2.getHours() + ((2 * Math.PI) / (speedIndicator / 60)) * time2.getMinutes() + ((2 * Math.PI) / speedIndicator) * time2.getSeconds() + ((2 * Math.PI) / (speedIndicator * 1000)) * time2.getMilliseconds() );

    context.translate(canvas.width / distanceBetweemBoth * 2, 0); // Moove Earth to the corresponding distance from the center.

    addSingleSun(canvas, context, width * 1.5, sun2Color, solarWind2Color);
    context.restore();

    
}

export default addTwoSuns;