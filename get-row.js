// Your code here.
// (With the following added to get you started.)
// The 2D array we'll need to reference to return the right data.
// Check it out to see its content and shape!
const pokemon = require('./pokemon.js');





// OUR code here.
const getRow = function(name){
  const pokeInfo = [];
  //[pokemon] has the 2d array with the name in it
  for (const info of pokemon){
    // console.log(info)
    if(info.includes(name)){
      pokeInfo.push(info)
    }

  }
  return pokeInfo
}
  
  
  // what do i want to do with the name from the 2dArray. 
  //i want to print put into an pokeCaught array and display it
  
  
  


console.log(getRow('granbull'))
console.log(getRow('charmander'))
console.log(getRow('swampert'))
console.log(getRow('daniel'))








////
if (typeof getRow === 'undefined') {
  getRow = undefined;
}

module.exports = getRow;
