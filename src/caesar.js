// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //test if arguments are valid before anything else.
    if(!isValid(input, shift)) return false;
    let shiftMod = shift;
    let result = '';
    const modInput = input.toLowerCase();
    if(!encode) shiftMod = 0 - shift;
    for(let i = 0; i < modInput.length; i ++){
      const currentChar = modInput.charCodeAt(i);
      if(currentChar > 122 || currentChar < 97){
        result+=modInput.charAt(i);
      }else{
        let shiftWrap = currentChar + shiftMod;
        if(shiftWrap > 122){
          result+=String.fromCharCode(shiftWrap-26);
        }else if(shiftWrap < 97){
          result+=String.fromCharCode(shiftWrap+26)
        }else{
          result+=String.fromCharCode(shiftWrap);
        }
      }
    }
    return result;
  }
  function isValid(input, shift){
    if(typeof input === 'string' && input.length > 0){
      if(typeof shift === 'number' && (shift !== 0 && shift < 25 && shift > -25)){
        return true;
      }
    }
    return false;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
