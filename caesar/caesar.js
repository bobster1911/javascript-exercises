const caesar = function(text, shift) {
    
    if (shift > 26 || shift < -26) {
        shift = shift % 26;
    }

    let newString = [];

    for (let i = 0; i < (text.length);i++) {
        
        let number = text.charCodeAt(i);
        let numShift = (number + shift);
        //if capital
        if (number >= 65 && number <= 90) {
            //get shifted char code
            if (shift < 0) { // if negative
                if ((numShift) < 65) {
                    newString[i] = String.fromCharCode(91 + (numShift - 65));
                } else {
                    newString[i] = String.fromCharCode(numShift);
                }
            } else { // if positive
                if (shift > (90 - number)) {
                    newString[i] = String.fromCharCode(64 + (numShift - 90));
                } else {
                    newString[i] = String.fromCharCode(numShift);
                } // end    
            } // end
            


        //if lowercase    
        } else if (number >= 97 && number <= 122) {
            if (shift < 0) { // if negative
                if ((numShift) < 97) {
                    newString[i] = String.fromCharCode(123 + (numShift - 97));
                } else {
                    newString[i] = String.fromCharCode(numShift);
                }
            } else { // if positive
                if (shift > (122 - number)) {
                    newString[i] = String.fromCharCode(96 + (numShift - 122));
                } else {
                    newString[i] = String.fromCharCode(numShift);
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

module.exports = caesar;
