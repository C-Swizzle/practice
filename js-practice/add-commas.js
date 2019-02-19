function addCommas(num){
    num=Number(num);
    var nlength=num.toString().length;
    var negCheck;
    if (num<0){
        negCheck="-";
        num=Number(num.toString().split("-")[1]);
    } else{
        negCheck="";
    }
    if (nlength>3&&num===parseInt(num)){
        var count=1;
        var tempArray=[];
        var returnArray=[];
        for (var i=nlength-1;i>=0;i--){
            if(count%4===0){
                tempArray.push(",");
                count=1;
                i++;
            }else{
                tempArray.push(num.toString()[i]);
                count++;
            }
        }
        for (var i=tempArray.length-1;i>=0;i--){
            returnArray.push(tempArray[i]);
        }
        return negCheck + returnArray.join("");
    }
    if(num===parseFloat(num)&&num.toString().split(".")[0].length>3){
        nlength=num.toString().split(".")[0].length;
        var count=1;
        var tempArray=[];
        var returnArray=[];
        for (var i=nlength-1;i>=0;i--){
            if(count%4===0){
                tempArray.push(",");
                count=1;
                i++;
            }else{
                tempArray.push(num.toString().split(".")[0][i]);
                count++;
            }
        }
        for (var i=tempArray.length-1;i>=0;i--){
            returnArray.push(tempArray[i]);
        }
        return negCheck + returnArray.join("")+"."+num.toString().split(".")[1];
    }
    return num;
}