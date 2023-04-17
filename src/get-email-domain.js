const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const a = email.split('')
  let d = 0
  const arr = []
  for(let i=0; i<a.length; i++){
    if(d==1){
      arr.push(a[i])
    }
    if(a[i]=='@' && (a[i+1].toUpperCase() !== a[i+1].toLowerCase())){
      d=1
    }
  }
  return arr.join('')
}

module.exports = {
  getEmailDomain
};
