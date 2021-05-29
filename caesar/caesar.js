const caesar = function(text, shift) {
    let text = prompt("Please enter text: ");
    let shift = prompt("Please enter shift: ") % 26;
    
    let newString = [];

    for (let i = 0; i < (text.length);i++) {
        
        let number = text.charCodeAt(i);

        //if capital
        if (number >= 65 && number <= 90) {
            //get shifted char code
            if (shift > (90 - number)) {
                newString[i] = String.fromCharCode(65 + (shift - (90 - number)));
            } else {
                newString[i] = String.fromCharCode(number + shift);
            } // end
        //if lowercase    
        } else if (number >= 97 && number <= 122) {
            if (shift > (122 - number)) {
                newString[i] = String.fromCharCode(97 + (shift - (122 - number)));
            } else {
                newString[i] = String.fromCharCode(number + shift);
            } // end
        } else {
            newString[i] = text[i];
        } // end

        } // end
    
    let output = "";
    for (i = 0; i < newString.length; i++) {
         output += newString[i];
    }
    return output;
    
}

caesar(text, shift);

module.exports = caesar;
