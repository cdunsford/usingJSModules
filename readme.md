//the below is used with module.exports. It works when others fail  20210220  cdunsford
//const msgMixer = require('./messageMixer');

//the below import now works. I had to use npm init to create the node package. I also had to add "type": "module", to package.json
//20210220   cdunsford
import {cCount, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, encode, palindrome, pigLatin} from './messageMixerFunctions.mjs';
