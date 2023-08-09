
// To create an asteroids belt I need to draw a lot of asteroids with differents speed size and distance from the sun.
// This function generate random speed size and distances depending on the arguments.
    // Array is the name of the object containing arrays with random values.
    // Number is the number of asteroids we want to create.
    // minSpeed is the minimal value for speed the asteroids can have.
    // minSize is the minimal value for size the asteroids can have.
    // minDistance is the minimal value for distance from the center the asteroids can have.
    // The three next values are the differences for each specificities between the minimum and the maximum value that gonna be add to the min value.
    // function addAsteroidsBelt (array, number, minSpeed, minSize, minDistance, speedDifference, sizeDifference, distanceDifference) {
    //     for (let index = 0; index < number; index++) {
    //         array.randomSpeed[index] = minSpeed + (Math.random() * speedDifference);
    //         array.randomSize[index] = minSize + (Math.random() * sizeDifference);
    //         array.randomDistance[index] = minDistance + (Math.random() * distanceDifference);
    //     }
    // }

    // export default addAsteroidsBelt;