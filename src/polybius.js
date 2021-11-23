// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // build polybius cyper in 2d array
    if(!isValid(input, encode)){
      return false;
    }
    //decoding using an array will be easier due to using index[i][j]
    const cypherDecode = [
      ["a","b","c","d","e"],
      ["f","g","h","(i/j)","k"],
      ["l","m","n","o","p"],
      ["q","r","s","t","u"],
      ["v","w","x","y","z"]
    ];
    //encoding using an object allows me to take the letter, and add the key
    const cypherEncode = {
      a:11, b:21, c:31, d:41, e:51,
      f:12, g:22, h:32, i:42, j:42, k:52,
      l:13, m:23, n:33, o:43, p:53,
      q:14, r:24, s:34, t:44, u:54,
      v:15, w:25, x:35, y:45, z:55
    };
    
    let result = '';
    if(encode===true){
      for(let i = 0; i < input.length; i++){
        const char = input.toLowerCase().charAt(i);
        if(char===' '){
          result+=' ';
        }else{
          result+=cypherEncode[char];
          }
        }
      }else{
        for(let i = 0; i < input.length; i++){
          if(input.charAt(i)===' '){
            result+=' ';
          }else{
            numY = parseInt(input[i+1]);
            numX = parseInt(input[i]);
            result+=(cypherDecode[numY-1][numX-1]);
            i++;
          }
        }
      }
    return result;
  }
  function isValid(input, state){
    if(state===false){
      if(typeof input === 'string' && input.length > 0){
        input = input.split(' ').join('');
        if(input.length%2===0){
          return true;
        }else{
          return false;
        }
      }
    }else if(typeof input === 'string' && input.length > 0 && state === true){
        return true;
    }else{
    return false;
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
