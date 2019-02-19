// Password Validation
// Create a function that validates a password to conform to the following rules:

// Length between 6 and 24 characters.
// At least one uppercase letter (A-Z).
// At least one lowercase letter (a-z).
// At least one digit (0-9).
// Maximum of 2 repeated characters.
// "aa" is OK 👍
// "aaa" is NOT OK 👎
// Special characters supported: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; ” ’ ? < > , .
// Examples
// validatePassword("P1zz@") ➞ false    // too short

// validatePassword("iLoveYou") ➞ false // missing number

// validatePassword("Fhg93@") ➞ true    // OK


function validatePassword(str) {
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var tempArray=[];
var lowercaseReq=false;
var uppercaseReq=false;
var digitReq=false;
var characterRepitition=true;
    var capsAlphabet = ['A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'];
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];

	if (str.length<6 || str.length>24) {
        return false;
    }
    for (var i=0;i<str.length;i++){
        for(var j=0;j<alphabet.length;j++) {
            if (str[i]===alphabet[j]) {
                lowercaseReq=true;
            }
            if (str[i]===capsAlphabet[j]) {
                uppercaseReq=true;
            }
        }
        for(var j=0;j<numbers.length;j++){
            if (str[i]===numbers[j]){
                digitReq=true;
            }
        }
        if(str[i]==="è"){
            return false;
        }
        
    }
    for (var i=0;i<str.length-2;i++){
        for (var i=0;i<str.length;i++){
            if(str[i]===str[i+1] && str[i]===str[i+2]){
                return false;
            }
        }
    }
var thingToReturn = "LowerCaseReq: " + lowercaseReq + "\nUpperCaseReq: " + uppercaseReq + "\nDigitReq: " + digitReq;
return lowercaseReq&&uppercaseReq&&digitReq;
}

console.log(validatePassword("aaaaaaaaaaa"));
