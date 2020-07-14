// Your code here.
// Note that you do NOT need the data for this function!

const getUrl = function(row){
  if (row === null){
    return null;
  }
  return row[1]
}



// OUR code here.

if (typeof getUrl === 'undefined') {
  getUrl = undefined;
}



module.exports = getUrl; 
