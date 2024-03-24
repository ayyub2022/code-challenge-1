function seekSpeed(speed) {
    // confirm if the speed is less than 70
    if (speed <= 70) {
      console.log("Ok");
    //  if speed is 70 or below no demerit points is deducted
    } else {
      const demeritPoints = Math.floor((speed - 70) / 5);
  // Calculate the number of demerit points 
      
  if (demeritPoints > 12) {
        console.log("License suspended");
     //confirm if the driver  more than 12 demerit points if yes,console.log License suspended
     } else {
        console.log(`Points: $[demeritPoints]`);
      }
    }
  }
//  1 demerit point is deducted for every 5km/s above the speed limit
  
  const speed = parseInt(prompt("seek speed of the car: "));
  
  // Check the speed
  seekSpeed(220);
  console.log(seekSpeed(220))