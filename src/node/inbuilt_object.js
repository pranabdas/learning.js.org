const timeNow = new Date();
const timeBorn = new Date("Jan 1, 1990 00:00:00 +5:30")
let timeElapsed = timeNow - timeBorn;

console.log("You are", Math.floor(timeElapsed/(1000 * 3600 *24)), "days old.")
