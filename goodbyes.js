'use strict';

//export as a function (one method)
module.exports = function(name){
  console.log("Farewell, dear " + name);
};

//export as an object (three methods)
module.exports = {
  farewell: function(name){
    console.log("Farewell, dear " + name);
  }
};

module.exports.farewell = function(name){
  console.log("Farewell, dear " + name);
};

exports.farewell = function(name){
  console.log("Farewell, dear " + name);
};
