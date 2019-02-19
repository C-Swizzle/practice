// Challenge
// Have the function ScaleBalancing(strArr) read strArr which will contain two elements, the first being the two positive integer weights on a balance scale (left and right sides) and the second element being a list of available weights as positive integers. Your goal is to determine if you can balance the scale by using the least amount of weights from the list, but using at most only 2 weights. For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"] then this means there is a balance scale with a weight of 5 on the left side and 9 on the right side. It is in fact possible to balance this scale by adding a 6 to the left side from the list of weights and adding a 2 to the right side. Both scales will now equal 11 and they are perfectly balanced. Your program should return a comma separated string of the weights that were used from the list in ascending order, so for this example your program should return the string 2,6 

// There will only ever be one unique solution and the list of available weights will not be empty. It is also possible to add two weights to only one side of the scale to balance it. If it is not possible to balance the scale then your program should return the string not possible. 
// Sample Test Cases
// Input:["[3, 4]", "[1, 2, 7, 7]"]

// Output:"1"


// Input:["[13, 4]", "[1, 2, 3, 6, 14]"]

// Output:"3,6"
function ScaleBalancing(strArr){
    var thingToBalance=strArr[0].split("[")[1].split("]")[0].split(",");
    var weightsToBalanceWith=strArr[1].split("[")[1].split("]")[0].split(",");
    // console.log(thingToBalance,weightsToBalanceWith);
    var givenWeightOne=Number(thingToBalance[0]);
    var givenWeightTwo=Number(thingToBalance[1]);
    // console.log(givenWeightOne,givenWeightTwo);
    if(givenWeightOne>givenWeightTwo){
        var bigWeight=givenWeightOne;
        var smallWeight=givenWeightTwo;
    } else{
        var bigWeight=givenWeightTwo;
        var smallWeight=givenWeightOne;
    }
    if(bigWeight===smallWeight+Number(weightsToBalanceWith[weightsToBalanceWith.length-1])) {
        return weightsToBalanceWith[weightsToBalanceWith.length-1];
    }
    for (var i=0;i<weightsToBalanceWith.length-1;i++){
        if(bigWeight===smallWeight+Number(weightsToBalanceWith[i])) {
            return weightsToBalanceWith[i];
        }
        for (var j=1+i;j<weightsToBalanceWith.length;j++){
            if(bigWeight===smallWeight+Number(weightsToBalanceWith[j])) {
                return Number(weightsToBalanceWith[j]);
            }
            if(bigWeight+Number(weightsToBalanceWith[i])===smallWeight+Number(weightsToBalanceWith[j])){
                return Number(weightsToBalanceWith[i])+","+Number(weightsToBalanceWith[j]);
            }
            if(bigWeight===smallWeight+Number(weightsToBalanceWith[i])+Number(weightsToBalanceWith[j])){
                return Number(weightsToBalanceWith[i])+","+Number(weightsToBalanceWith[j]);
            }
            
        }
    }
    return "not possible";
}
console.log(ScaleBalancing(["[3, 4]", "[1, 2, 7, 7]"]));
console.log(ScaleBalancing(["[13, 4]", "[1, 2, 3, 6, 14]"]));
