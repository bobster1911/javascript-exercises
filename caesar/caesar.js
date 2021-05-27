const caesar = function(text, shift) {
    let newString = "";

    for (let i = 0; i < (text.length - 1);i++)

        let number = text.charCodeAt(i);
        if (isAlpha(text[i]) == true) {
            //if capital
            if (number >= 65 && number <= 90) {
                //get shifted char code
                if (shift > (90 - number)) {
                    newString[i] = 65 + (shift - (90 - number));
                } else {
                    newString[i] = 
                }
            }
        }
       }   //if lowercase
            if (number >= 97 && number <= 122) {

            }
        } else {
            //do nothing and move to the next iteration.
            continue;
        }
};

module.exports = caesar;
