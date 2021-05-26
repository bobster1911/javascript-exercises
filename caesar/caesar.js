const caesar = function(text, shift) {
    for (let i = 0; i < (text.length - 1);i++)
        if (isAlpha(text[i]) == true) {
            //if capital
            if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {

                
            }
            //if lowercase
        } else {
            //do nothing and move to the next iteration.
        }
};

module.exports = caesar;
