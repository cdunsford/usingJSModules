//the below is used with module.exports. It works when others fail  20210220  cdunsford
//const msgMixer = require('./messageMixer');

//the below import now works. I had to use npm init to create the node package. I also had to add "type": "module", to package.json
//20210220   cdunsford
import {cCount, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, encode, palindrome, pigLatin} from './messageMixerFunctions.mjs';

//the below is used with default exports. //it doesn't work without adding and modifying package.json
//import msgMixer from './messageMixer';

/*
function displayMessage() {
    console.log(msgMixer.countCharacter("What is the color of the sky?", "t"));
    console.log(msgMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(msgMixer.reverseWord("What is the color of the sky?"));
    console.log(msgMixer.reverseAllWords("What is the color of the sky?"));
    console.log(msgMixer.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(msgMixer.encode("What is the color of the sky?"));
    console.log(msgMixer.palindrome('My palindrome'));
    console.log(msgMixer.pigLatin('My palindrome','&&'));
  }
  */

  function displayMessage2() {
    console.log(cCount("What is the color of the sky?", "t"));
    console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(reverseWord("What is the color of the sky?"));
    console.log(reverseAllWords("What is the color of the sky?"));
    console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(encode("What is the color of the sky?"));
    console.log(palindrome('My palindrome'));
    console.log(pigLatin('My palindrome','&&')); 
  }
  
  displayMessage2();