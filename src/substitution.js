// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(alphabet===undefined) return false;
    if(!isValid(alphabet)) return false;
    input = input.toLowerCase();
    const key = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    if(encode){
      for(let i = 0; i < input.length; i++){
        if(input.charAt(i)===' '){
          result+=' ';
        }else{
          let charIndex = key.indexOf(input[i]);
          result+=alphabet[charIndex];
        }
      }
    }else{
      for(let i = 0; i < input.length; i++){
        if(input.charAt(i)===' '){
          result+=' ';
        }else{
          let charIndex = alphabet.indexOf(input[i]);
          result+=key[charIndex];
        }
      }
    }
    return result;
  }
  function isValid(alphabet){
    if(alphabet.length !== 26 && alphabet.length !== 0) return false;
    return new Set(alphabet).size === alphabet.length;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
