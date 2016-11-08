'use strict';

//export farewell as a function (one method)
// module.exports = function(name){
//   console.log("Farewell, dear " + name);
// };

//export farewell as an object (1)
// module.exports = {
//   name: function(name){
//     console.log("Farewell, dear " + name);
//   }
// };

//export farewell as an object (2)
// module.exports.farewell = function(name){
//     console.log("Farewell, dear " + name);
// }

//export farewell as an object (3)
exports.farewell = function (name) {
      console.log("Farewell, dear " + name);
};
