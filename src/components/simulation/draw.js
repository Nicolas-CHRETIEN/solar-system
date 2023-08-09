import addPlanet from './addPlanet.jsx';
import addMoon from './addMoon.jsx';
import addAsteroid from './addAsteroid.jsx';
import drawFilledArc from './drawFilledArc.jsx';

// Declare variables for images.
/*function draw(context) {
  // Clear old drawnings.
  const canvas = context.canvas
  
  context.clearRect(0, 0, canvas.width, canvas.height); // initiate canvas.
  
  context.globalCompositeOperation = 'destination-over';
  context.fillStyle = 'rgba(0, 0, 0, 0.6)';
  context.drawImage(mercury, 0, 0, 100, 100);


         mercury.src = '../src/images/mercury.png';

  // ----------------------------------------Draw the sun----------------------------------------
drawFilledArc(canvas, context, canvas.width / 2, canvas.height / 2, 50, "rgba(255, 238, 0)");
let radial2 = context.createRadialGradient(canvas.width / 2, canvas.width / 2, canvas.width / 60, canvas.width / 2 , canvas.width / 2, canvas.width / 32);  
radial2.addColorStop(0.3,'rgba(255, 88, 0, 0.6)');
radial2.addColorStop(1, 'rgba(0, 0, 0, 1)');
drawFilledArc(canvas, context, canvas.width / 2, canvas.width / 2, 30, radial2);
}*/

let mercury = new Image();
let venus = new Image();
let earth = new Image();
let mars = new Image();
let jupiter = new Image();
let saturn = new Image();
let uranus = new Image();
let neptune = new Image();
let moon = new Image();
let moon1 = new Image();
let moon2 = new Image();
let moon3 = new Image();
let moon4 = new Image();
let moon5 = new Image();
let moon6 = new Image();
let moon7 = new Image();
let phobos = new Image();
let demos = new Image();

// Create arrays for random asteroids particularities.
// This function create an array with random values for asteroids behaviours. It needs to be called outside the draw or the datas are gonna be reinitialize each second. 

// const randomAsteroids1 = [];
// const randomAsteroids2 = [];
// const randomAsteroids3 = [];

// addAsteroidsBelt(randomAsteroids1, 1000, 200, 2000, 7.4, 500, 10000, 1.8);
// addAsteroidsBelt(randomAsteroids2, 1000, 1000, 800, 1.6, 10000, 10000, 0.5);
// addAsteroidsBelt(randomAsteroids3, 500, 400, 1500, 1, 1000, 10000, 30);


mercury.src = '../src/images/mercury.png';
venus.src = '../src/images/venus.png';
earth.src = '../src/images/earth.png';
mars.src = '../src/images/mars.png';
jupiter.src = '../src/images/jupiter.png';
saturn.src = '../src/images/saturn.png';
uranus.src = '../src/images/uranus.png';
neptune.src = '../src/images/neptune.png';
moon.src = '../src/images/moon.png';
moon1.src = '../src/images/moon1.png';
moon2.src = '../src/images/moon2.png';
moon3.src = '../src/images/moon3.png';
moon4.src = '../src/images/moon4.png';
moon5.src = '../src/images/moon5.png';
moon6.src = '../src/images/moon6.png';
moon7.src = '../src/images/moon7.png';
phobos.src = '../src/images/phobos.png';
demos.src = '../src/images/demos.png';

// function draw(context, canvas) {
// // Clear old drawnings.
// context.clearRect(0, 0, context.canvas?.width, context.canvas?.height); // initiate canvas.
// context.globalCompositeOperation = 'destination-over';
// context.fillStyle = 'rgba(0, 0, 0, 0.6)';


// // ----------------------------------------Mercury-------------------------------------------
// addPlanet(canvas, context, 14.45118, 30, 250, mercury, 30, 0);
// context.restore();
// context.restore();

// // ----------------------------------------Venus----------------------------------------
// addPlanet(canvas, context, 36.90732, 20, 130, venus, -1, 0);
// context.restore();
// context.restore();

// // ----------------------------------------Earth----------------------------------------
// addPlanet(canvas, context, 60, 15, 100, earth, 0.5, 0);
// addMoon(canvas, context, 4.4882407344, -20, 300, moon);
// context.restore();
// context.restore();

// // ----------------------------------------Mars----------------------------------------
// addPlanet(canvas, context, 112.8384, 10, 200, mars, 0.7, 0);
// addMoon(canvas, context, 3, -8, 500, phobos);
// context.restore();
// addMoon(canvas, context, 9, -10, 450, demos);
// context.restore();
// context.restore();


// // ----------------------------------------Asteroids's belt----------------------------------------
// // Ceres
// addAsteroid(canvas, context, 276.6, 9, 800, "rgb(191, 240, 255)");
// // Asteroids
// // for ( let index1 = 0; index1 < 1000; index1++) {
// //     addAsteroid(randomAsteroids1.randomSpeed[index1], randomAsteroids1.randomDistance[index1], randomAsteroids1.randomSize[index1], "rgb(153, 165, 167)");
// // }

// // ----------------------------------------Jupiter----------------------------------------
// addPlanet(canvas, context, 711.642, 6, 50, jupiter, 2, 0);
// addMoon(canvas, context, 5, -35, 250, moon5);
// context.restore();
// addMoon(canvas, context, 9, -45, 220, moon4);
// context.restore();
// addMoon(canvas, context, 15, -55, 200, moon3);
// context.restore();
// addMoon(canvas, context, 21.9, -65, 170, moon1);
// context.restore();
// context.restore();

// // ----------------------------------------Saturn----------------------------------------
// addPlanet(canvas, context, 1346.616, 4, 37.5, saturn, 2, 16);
// addMoon(canvas, context, 5, -45, 300, moon4);
// context.restore();
// addMoon(canvas, context, 9.3, -50, 250, moon4);
// context.restore();
// addMoon(canvas, context, 12, -55, 220, moon3);
// context.restore();
// addMoon(canvas, context, 18.4, -65, 220, moon7);
// context.restore();
// addMoon(canvas, context, 23, -75, 200, moon6);
// context.restore();
// addMoon(canvas, context, 27, -85, 220, moon5);
// context.restore();
// addMoon(canvas, context, 33, -95, 220, moon3);
// context.restore();
// addMoon(canvas, context, 38, -105, 220, moon7);
// context.restore();
// context.restore();

// // ----------------------------------------Uranus----------------------------------------
// // Here I need to change the function because Uranus is not oriented the same way that the other planets. So it must not spin.
// context.save(); // Save to be able to restore here if a moon need to be added.
// context.translate(canvas.width / 2,canvas.height/2); // Start at the center of the screen.
// let time = new Date(); // Define new time.

// // Below, 2 * PI transform a degre in radian. Depends on the speed indicator I select the spin'speed is gonna be hight or low.
// context.rotate(((2 * Math.PI) / (5042.928 / 7)) * time.getDay() + ((2 * Math.PI) / (5042.928 / 3600)) * time.getHours() + ((2 * Math.PI) / (5042.928 / 60)) * time.getMinutes() + ((2 * Math.PI) / 5042.928) * time.getSeconds() + ((2 * Math.PI) / (5042.928 * 1000)) * time.getMilliseconds()); // SpeedIndicator is used to adapt speed of the objects based on earth speed. Earth takes 60 seconds to turn around the sun. For exemple if an object is two times slower than earth, its speedIndicator is gonna be 30.
// context.translate((canvas.width / 3), 0); // Moove Earth to the corresponding distance from the center.

// // Below the drawing order is important. As I indicated destination-over as global composite operation, the new drawn object are going to be hide by the old ones.
// // Draw the shadow. I need a rectangle here to cover only half of the planet. I must not cover the moons passing behind which are supposed to pass upside the planet as we view the planet system from the top.
// // Add a gradiant to the shadow to make it follow the planet curve.
// let radial = context.createRadialGradient(-canvas.width / (55 * 2), 0, canvas.width / ((55 * 1.7)), 0, 0, canvas.width / (55 / 2));
// radial.addColorStop(0,"rgba(0, 0, 0, 0)");
// radial.addColorStop(0.1, "rgba(0, 0, 0, 0.6)");

// context.beginPath();
// context.fillStyle = radial;
// context.strokeStyle = radial;
// context.moveTo(0, -canvas.width / (55 * 2)); // Draw to the middle (0 is the center) left of the planet...
// context.lineTo(0, canvas.width / (55 * 1.8)); // Until the middle right...
// context.lineTo(canvas.width / (55 * 2), canvas.width / (55 * 2)); // And then to the end right.
// context.lineTo(canvas.width / (55 * 2), -canvas.width / (55 * 2)); // Finish with the end left.
// context.fill(); // Fill the triangle shape.

// // Draw the ring. The view is from the side as Uranus's north pole faces the sun.
// context.beginPath();
// context.strokeStyle = "rgb(209, 205, 252)";
// context.moveTo(0, 34);
// context.bezierCurveTo(5, -5, 5, -5, 0, -34);
// context.bezierCurveTo(-5, -5, -5, -5, 0, 34);
// context.stroke();

// drawFilledArc (canvas, context, 0, 0, canvas.width / 17, "rgb(120, 239, 205)") // Draw Uranus to hide correctly the moons which pass behind (it doesn't work well with an image).

// context.translate(-15, 0);
// addMoon(canvas, context, 28, 38, 200, moon5);
// context.restore();
// addMoon(canvas, context, 19, 36, 220, moon6);
// context.restore();
// addMoon(canvas, context, 12.5, 35.6, 220, moon1);
// context.restore();
// addMoon(canvas, context, 9, 35, 250, moon2);
// context.restore();
// addMoon(canvas, context, 5, 30, 300, moon2);
// context.restore();
// context.restore(); // I need a third restore() here because if I put only two Neptune code is based on Uranus position.

// // ----------------------------------------Neptune----------------------------------------
// addPlanet(canvas, context, 9892.14, 2.25, 55, neptune, 5, 0);
// addMoon(canvas, context, 6, -30, 250, moon2);
// context.restore();
// addMoon(canvas, context, -26.5, -60, 200, moon2);
// context.restore();
// context.restore();

// // ----------------------------------------Kuiper's belt----------------------------------------
// // for (let index2 = 0; index2 < 1000; index2++) {
// //     addAsteroid(randomAsteroids2.randomSpeed[index2], randomAsteroids2.randomDistance[index2], randomAsteroids2.randomSize[index2], "rgb(153, 165, 167)");
// // }

// // ----------------------------------------Pluto----------------------------------------
// addAsteroid(canvas, context, 14864.4, 2, 500, "rgb(191, 240, 255)");

// // ----------------------------------------Haumea----------------------------------------
// addAsteroid(canvas, context, 15000, 1.8, 700, "rgb(191, 240, 255)");

// // ----------------------------------------Eris----------------------------------------
// addAsteroid(canvas, context, 15120, 1.5, 700, "rgb(191, 240, 255)");

// // ----------------------------------------Makemake----------------------------------------
// addAsteroid(canvas, context, 15352.6, 1.2, 800, "rgb(191, 240, 255)");

// // ----------------------------------------random asteroids----------------------------------------
// // for (let index3 = 0; index3 < 500; index3++) {
// //     addAsteroid(randomAsteroids3.randomSpeed[index3], randomAsteroids2.randomSpeed[index3] / 1000, randomAsteroids3.randomSize[index3], "rgb(153, 165, 167)"); //Here distance is based on the object'sspeed because the nearest they are from the sun the fastest the go.
// // }

// // ----------------------------------------Draw the sun----------------------------------------
// drawFilledArc(canvas, context, canvas.width / 2, canvas.height / 2, 50, "rgba(255, 238, 0)");
// let radial2 = context.createRadialGradient(canvas.width / 2, canvas.width / 2, canvas.width / 60, canvas.width / 2 , canvas.width / 2, canvas.width / 32);  
// radial2.addColorStop(0.3,'rgba(255, 88, 0, 0.6)');
// radial2.addColorStop(1, 'rgba(0, 0, 0, 1)');
// drawFilledArc(canvas, context, canvas.width / 2, canvas.width / 2, 30, radial2);

// // Add the orbits
// context.beginPath();
// context.strokeStyle = "rgba(202, 208, 208, 0.4)";  
// context.arc(canvas.width/2,canvas.height/2,(canvas.width / 30),0,Math.PI*2,false); // Mercury's orbit.
// context.arc(canvas.width/2,canvas.height/2,(canvas.width / 20),0,Math.PI*2,false); // Venus's orbit.
// context.arc(canvas.width/2,canvas.height/2,(canvas.width / 15),0,Math.PI*2,false); // Earth's orbit.
// context.arc(canvas.width/2,canvas.height/2,(canvas.width / 10),0,Math.PI*2,false); // Mars's orbit.
// context.arc(canvas.width/2,canvas.height/2,(canvas.width / 6),0,Math.PI*2,false); // Jupiter's orbit.
// context.arc(canvas.width/2,canvas.height/2,(canvas.width / 4),0,Math.PI*2,false); // Saturn's orbit.
// context.arc(canvas.width/2,canvas.height/2,(canvas.width / 3),0,Math.PI*2,false); // Uranus's orbit.
// context.arc(canvas.width/2,canvas.height/2,(canvas.width / 2.25),0,Math.PI*2,false); // Neptune's orbit.
// context.stroke();

// window.requestAnimationFrame(draw);

// }

export default draw