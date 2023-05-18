const buttons= document.getElementsByTagName("button");
const output = document.getElementById("display");


for(let i=0 ; i< buttons.length ; i++){
    buttons[i].addEventListener("click",callback);
}

function callback(event){
    let target=event.target;
    
    let currentValue = target.innerText ;
    let outputValue = output.innerText ;
    let operators = ["+","-","*","/"];
    let lastkey = outputValue[outputValue.length-1];
    console.log(lastkey ,currentValue);
    if(target.innerText == "AC"){
        output.innerText="";
    }
    else if(operators.includes(currentValue) && operators.includes(lastkey) ){
        let newOutput=outputValue.slice(0,outputValue.length-1) + currentValue ;
        output.innerText=newOutput;
       // output.innerText=outputValue.substring(0,outputValue.length-1);
    }
    else if(currentValue == '='){
      let ans = eval(outputValue);
      output.innerText=ans;
    }
    
    else{
        let results = outputValue+currentValue;
        output.innerText=results;
    }
}

