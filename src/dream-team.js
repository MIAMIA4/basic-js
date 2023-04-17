const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const arr = []
  if(Array.isArray(members)){
    members.forEach(e=>{
      if(typeof e == 'string'){
        let arr1 = e.split('')
        for(let i=0; i<arr1.length; i++){
          if(arr1[i].toLowerCase() !== arr1[i].toUpperCase()){
            return arr.push(arr1[i].toUpperCase())
          }
        }
  
      }
    })
    return arr.sort((a, b) => a.localeCompare(b)).join('')
  } else return false
}

module.exports = {
  createDreamTeam
};
