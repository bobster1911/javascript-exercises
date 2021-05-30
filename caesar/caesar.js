const caesar = function(text, shift) {
    
    if (shift > 26 || shift < -26) {
        shift = shift % 26;
    }

    let newString = [];

    for (let i = 0; i < (text.length);i++) {
        
        let number = text.charCodeAt(i);

        //if capital
        if (number >= 65 && number <= 90) {
            //get shifted char code
            if (shift < 0) { // if negative
                if ((number + shift) < 65) {
                    newString[i] = String.fromCharCode(90 + (shift + 1));
                } else {
                    newString[i] = String.fromCharCode(shift + number);
                }
            } else { // if not negative
                if (shift > (90 - number)) {
                    newString[i] = String.fromCharCode(65 + (shift - (90 - number)));
                } else {
                    newString[i] = String.fromCharCode(number + shift);
                } // end    
            } // end
            


        //if lowercase    
        } else if (number >= 97 && number <= 122) {
            if (shift < 0) { // if negative
                if ((number + shift) < 97) {
                    newString[i] = String.fromCharCode(122 + (shift + 1));
                } else {
                    newString[i] = String.fromCharCode(number + shift);
                }
            } else {
                if (shift > (122 - number)) {
                    newString[i] = String.fromCharCode(97 + (shift - (122 - number)));
                } else {
                    newString[i] = String.fromCharCode(number + shift);
                } // end
            }
        // if not an alpha char - do nothing.  
        } else {
            newString[i] = text[i];
        } // end

        } // end
    
    let output = "";
    for (i = 0; i < newString.length; i++) {
         output += newString[i];
    }
    console.log(output);
    return output;
    
}

caesar(text, shift);

//module.exports = caesar;
