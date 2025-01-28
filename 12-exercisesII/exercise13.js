
let jumpDistance = 3;
let jumps = 17;

let totalDistance = 0;

for (let cont = 1; cont <= jumps; cont++) {
    totalDistance += jumpDistance;
    
    console.log(`The kangaroo has jumped ${cont} times and has traveled ${totalDistance} meters so far.`);
}