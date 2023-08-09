import drawFilledArc from './drawFilledArc';

const addSingleSun = (canvas, context, width, sunColor, solarWindColor) => {
    drawFilledArc(canvas, context, canvas.width / 2, canvas.height / 2, width * 1.7, sunColor);
    const radial2 = context.createRadialGradient(canvas.width / 2, canvas.width / 2, canvas.width / (width * 2), canvas.width / 2 , canvas.width / 2, canvas.width / 32);  
    radial2.addColorStop(0.3, solarWindColor);
    radial2.addColorStop(1, 'rgba(0, 0, 0, 1)');
    drawFilledArc(canvas, context, canvas.width / 2, canvas.width / 2, width, radial2);
}

export default addSingleSun;