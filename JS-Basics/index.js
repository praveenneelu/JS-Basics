// Write a function for checkspeed limit of vehicle.
// Speed Limit = 70
// More than 5 speed(i.e 75) = 1 point
// 12 points = suspended.

checkspeed(77);
function checkspeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed <= (speedLimit + kmPerPoint)) {
        console.log("Good");
        return;
    }
    
    const points = Math.floor((speed - speedLimit) / kmPerPoint) ;
    if (points > 12) {
        console.log("License is suspended");
    }
    else {
        console.log('Points', points)
    }
    

}
