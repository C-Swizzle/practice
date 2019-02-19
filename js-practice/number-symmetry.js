// Is the Number Symmetrical?
// Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

// Examples
// isSymmetrical(7227) ➞ true

// isSymmetrical(12567) ➞ false

// isSymmetrical(44444444) ➞ true

// isSymmetrical(9939) ➞ false

// isSymmetrical(1112111) ➞ true
// Notes
// N/A

function isSymmetrical(num){
    var isEven;
    var numString=num.toString();
    // if(numString.length%2===0){
    //     isEven=true;
    // } else{
    //     isEven=false;
    // }
    // if(isEven){
        for (var i=0;i<numString.length/2;i++){
            if(numString[i]!==numString[numString.length-i-1]){
                return false;
            }
        }
    // }
    return true;
}
console.log(isSymmetrical(18789));