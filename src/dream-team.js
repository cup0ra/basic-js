module.exports = function createDreamTeam( members ) {
  if (!Array.isArray(members)) return false;
let result = members.map(function(el){
  if (typeof el !== 'string' ){
      delete el;
  
  }else { 
    
    return el.trim()[0].toUpperCase(); 
  }
   
})
return result.sort().join('');
};