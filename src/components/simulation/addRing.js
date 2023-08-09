const addRing = (context, width, ringWidth, distanceFromPlanet, color) => {
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = ringWidth;
    context.arc(0, 0, distanceFromPlanet, Math.PI*2, 0, false);
    context.stroke();
}

export default addRing;