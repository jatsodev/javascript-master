let distance_earth_moon = 384400;
let ship_speed = 1225;

let travel_time = distance_earth_moon / ship_speed;

console.log("The ship will arrive in " + Math.ceil(travel_time) + " hours");