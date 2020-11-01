module.exports = class DepthCalculator {
    calculateDepth( arr ) {  
     let result = 1;
     arr.forEach(item => {
         if (Array.isArray(item)) {
             result = Math.max(result, 1 + this.calculateDepth(item));
         }
     });
     return result;
}
}
