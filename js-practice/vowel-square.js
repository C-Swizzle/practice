// Challenge
// Have the function VowelSquare(strArr) take the strArr parameter being passed which will be a 2D matrix of some arbitrary size filled with letters from the alphabet, and determine if a 2x2 square composed entirely of vowels exists in the matrix. For example: strArr is ["abcd", "eikr", "oufj"] then this matrix looks like the following: 

// a b c d
// e i k r
// o u f j 

// Within this matrix there is a 2x2 square of vowels starting in the second row and first column, namely, ei, ou. If a 2x2 square of vowels is found your program should return the top-left position (row-column) of the square, so for this example your program should return 1-0. If no 2x2 square of vowels exists, then return the string not found. If there are multiple squares of vowels, return the one that is at the most top-left position in the whole matrix. The input matrix will at least be of size 2x2. 
// Sample Test Cases
// Input:["aqrst", "ukaei", "ffooo"]
//aqrst
//ukaei <-- a has the location 1-2
//ffooo
// Output:"1-2"


// Input:["gg", "ff"]

// Output:"not found"
function VowelSquare(strArr) { 

    // code goes here  
    var vowels=["a","e","i","o","u"];
    for(var i=0;i<strArr.length;i++){
        for(var j=0;j<strArr[i].length;j++){
            if(vowels.indexOf(strArr[i][j])!==-1&&vowels.indexOf(strArr[i+1][j])!==-1&&vowels.indexOf(strArr[i][j+1])!==-1&&vowels.indexOf(strArr[i+1][j+1])!==-1){
                return i + "-" + j;
            }
        }
}
return "not found";
  }
  console.log(VowelSquare(["aqrst", "ukaei", "ffooo"]));