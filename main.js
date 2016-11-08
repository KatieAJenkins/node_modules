'use strict';
 var greeting =  require('./greetings');
 var goodbye = require('./goodbyes');

greeting('Omar');
greeting('Stringer');


//Explain to each other how the module.exports object works and how the require() function works.

//If we execute the code in main.js, what can we expect to see in the terminal?





// ***** STOP ***** //





//Export the following function from goodbyes.js to main.js in four different ways (i.e., using four types of syntax), and then call it from main.js, printing to the console "Farewell, dear Kima".

// var farewell = function(name){
//   console.log("Farewell, dear " + name);
// };

goodbye.farewell('Kima');
