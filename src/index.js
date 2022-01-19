module.exports = function toReadable (number) {
    let a = number % 10;
    let b = (number - a) % 100;
    let c = (number - a - b);
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let onesSSS = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];    
    let tens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundreds = ['zero', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    if (number < 10) {
        return ones[number];    
    } else if (number > 10 && number < 20) {  /// от 10 до 20
        let sum = number - 10;
        return onesSSS[sum];
    } else if (number === b) { ////// 10, 20, 30, ...90
        let bb = b / 10;
        return tens[bb];
    } else if (number > 20 && number < 100) { ///от 20 до 100
        let bb = b / 10;
        return tens[bb] + " " + ones[a];
    } else if (number === number - a - b) {  /////100, 200, 300, ... 900
        let cc = c / 100;
        return hundreds[cc];
    } else if (number === number - a) { ////520, 330, 490, ... и т.подоб.
        let bb = b / 10;
        let cc = c / 100;
        return hundreds[cc] + " " + tens[bb];
    } else if (number === number - b) {     //////509, 808, 405, .... и т.подоб.    
        let cc = c / 100;
        return hundreds[cc] + " " + ones[a];
    } else if (number === 10 + c + a) {  /// hundred + onesSSS
        let sum = number - c - 10;
        let cc = c / 100;
        return hundreds[cc] + " " + onesSSS[sum];
    } else if (number > 100 && number < 1000) { ///// от 100 до 1000
        let bb = b / 10;
        let cc = c / 100;
        return hundreds[cc] + " " + tens[bb] + " " + ones[a];
    }
};



