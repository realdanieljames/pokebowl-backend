// Your code here.
// (With the following added to get you started.)
// The 2D array we'll need to reference to return the right data.
// Check it out to see its content and shape!
const pokemon = require('./pokemon.js');



// OUR code here.

//[pokemon] has the 2d array with the name in it  
// what do i want to do with the name from the 2dArray. 
//i want to display it

const getRow = function(name){
  for (const pokeInfo of pokemon){
    if(pokeInfo.includes(name)){
      return pokeInfo
    }
  }
  return null
}

  

  

////
if (typeof getRow === 'undefined') {
  getRow = undefined;
}

module.exports = getRow;
