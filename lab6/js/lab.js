// index.js - lab 6 arrays and objects 
// Author: Caroline Bowen
// Date:27 April 2024

 
myTransport = ["personal vehicle", "rage walking"];


myMainRide = {
  make: "Nissan",
  model: "Rogue",
  color: "Red",
  year: 2013,
  age: function() {
    return 2024 - this.year;
  }
}

// output
document.writeln("Kinds of Transportation I Use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

					
					
						
// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
