const caesar = function(text, shift) {
    let newString = "";

    for (let i = 0; i < (text.length - 1);i++) {

        if (isAlpha(text[i]) == true) {
            let number = text.charCodeAt(i);
            //if capital
            if (number >= 65 && number <= 90) {
                //get shifted char code
                if (shift > (90 - number)) {
                    newString[i] = fromCharCode(65 + (shift - (90 - number)));
                } else {
                    newString[i] = fromCharCode(number + shift);
                } // end
            //if lowercase    
            } else if (number >= 97 && number <= 122) {
                if (shift > (122 - number)) {
                    newString[i] = fromCharCode(97 + (shift - (122 - number)));
                } else {
                    newString[i] = fromCharCode(number + shift);
                } // end
            } else {
                console.log("Something has gone wrong.");
            } // end
        } else {
                newString[i] = text[i];
        } // end
    } // end 

    return newString;

module.exports = caesar;
