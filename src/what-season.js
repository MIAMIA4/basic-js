const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(date){
    if(!isNaN(Date.parse(date))){
      a = date.getMonth()
      if(a>-1 && a<12){
        if(a<2 || a==11){
          return 'winter'
        } else if(a<5){
          return 'spring'
        } else if(a<8){
          return 'summer'
        } else {
          return 'autumn'
        }
      
      } else {
        throw new Error('Invalid date!');
      }
    } else {
      throw new Error('Invalid date!');
    }
    
  } else {
    return 'Unable to determine the time of year!'
  }
}

module.exports = {
  getSeason
};
