'use strict';
//  var greeting =  require('./greetings');
//
// greeting('Omar');
// greeting('Stringer');

// ***** PART 1 ***** //

//Refer to the code above, as well as that in greetings.js. Explain to a partner how the module.exports object works and how the require() function works.

//If we execute the code in main.js, what can we expect to see in the terminal?


// ***** PART 2 ***** //

//Read "How do you split..." to remind yourself of what you saw in the video.

//Then, reference the examples shown there to export the following function from goodbyes.js to main.js in four different ways (i.e., using four types of syntax). Once exported, call the code from main.js, printing to the console "Farewell, dear Kima" (Make sure to check that each exported function works).

//export a function
// var goodbye = require('./goodbyes');
//   goodbye('Kima');

//export an object #1
// var goodbye = require('./goodbyes');
// goodbye.name('Kima');

//export an object #2
// var goodbye = require('./goodbyes');
// goodbye.farewell('Kima');

//export an object #3
var goodbye = require('./goodbyes');
goodbye.farewell('Kima');
