module.exports = function repeater( str, options ) {
    let result;
    if(options.addition === true || options.addition === false || options.addition === null){
        result = String(options.addition)
    }else{
        result = options.addition;
    }
    let additionSeparator = ((result ? result : '') + '`')
    .repeat(options.additionRepeatTimes ? options.additionRepeatTimes : 1)
    .split('`')
    .slice(0,-1)
    .join((options.additionSeparator && options.additionRepeatTimes ? options.additionSeparator : ''))
    let separator = (str + additionSeparator + '`')
    .repeat(options.repeatTimes ? options.repeatTimes : 1)
    .split('`')
    .slice(0,-1)
    .join((options.separator ? options.separator : '+'))
   return separator; 
};
  