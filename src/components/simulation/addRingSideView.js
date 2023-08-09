const addRingSideView = (canvas, context, width, ringWidth, distanceFromPlanet, color) => {
    const radius = canvas.width / width;
    const viewRings = radius /2;
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = ringWidth;
    context.moveTo(-viewRings / 4, distanceFromPlanet + radius);
    context.bezierCurveTo(-viewRings / 2, radius, -viewRings / 2, radius, -viewRings / 2, radius); // Half curve behind planet on the left side.
    context.moveTo(-viewRings / 2, -radius);
    context.bezierCurveTo(-viewRings / 2, -radius, -viewRings / 2, -radius, -viewRings / 4, -distanceFromPlanet - radius); // Half curve behind planet on the right side.
    context.bezierCurveTo(0, -radius - distanceFromPlanet * 1.3, 0, -radius - distanceFromPlanet * 1.3, viewRings / 4, -distanceFromPlanet - radius); // Small curve at the end right of the ring.
    context.moveTo(viewRings / 4, -distanceFromPlanet - radius);
    context.bezierCurveTo(viewRings, -viewRings, viewRings, viewRings, viewRings / 4, distanceFromPlanet + radius); // Long curve in front of the planet.
    context.bezierCurveTo(0, radius + distanceFromPlanet * 1.3, 0, radius + distanceFromPlanet * 1.3, -viewRings / 4, distanceFromPlanet + radius); // Small curve at the end left of the ring.
    context.stroke();
    context.lineWidth = 1;
}

export default addRingSideView;