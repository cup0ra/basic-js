const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string'|| !sampleActivity){
    return false;
  }
  let a = Number(parseFloat(sampleActivity));
   if(a > 15 || a <= 0 || isNaN(a)) {
     return false;
   }
    return Math.ceil(Math.log(MODERN_ACTIVITY /a) / (0.693 / HALF_LIFE_PERIOD));  
};
