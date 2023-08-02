var input = document.getElementById('input')
var result = document.getElementById("result");
var inputType= document.getElementById("inputType")
var resultType = document.getElementById("resultType")
var btn = document.getElementById("btn");


btn.addEventListener("click",calculate);

function calculate(){
    option_from = inputType.value;
    option_to = resultType.value;
    value = input.value;
    //meter to kilometer
    if(option_from === "meter" && option_to === "kilometer"){
        convert = parseFloat(value)*0.001;
        result.innerText = value +" "+ option_from + " "+ convert + " " + option_to;
    }
    //meter to centimeter
    else if(option_from === "meter" && option_to === "centimeter"){
        convert = parseFloat(value)*100;
        result.innerText = value +" "+ option_from + " "+ convert + " " + option_to;
    }
    //meter to meter
    else if(option_from === "meter" && option_to === "meter"){
        result.innerText = value +" "+ option_from+ " "+ value + " "+option_to;
    }
    //kilometer to meter
    else if(option_from === "kilometer" && option_to === "meter"){
        convert = parseFloat(value)*1000;
        result.innerText = value +" "+ option_from + " "+ convert + " " + option_to;
    }
    //kilometer to centimeter
    else if(option_from === "kilometer" && option_to ==="centimeter"){
        convert = parseFloat(value)*100000;
        result.innerText = value +" "+ option_from + " "+ convert + " " + option_to;
    }
    //kilometer to kilometer
    else if(option_from === "kilometer" && option_to === "kilometer"){
        result.innerText = value +" "+ option_from+ " "+ value + " "+option_to;
    }
    //centimeter to meter
    else if(option_from === "centimeter" && option_to === "meter"){
        convert = parseFloat(value)*0.01;
        result.innerText = value +" "+ option_from + " "+ convert + " " + option_to;
    }
    //centimeter to kilometer
    else if(option_from === "centimeter" && option_to === "kilometer"){
        convert = parseFloat(value)*0.00001;
        result.innerText = value +" "+ option_from + " "+ convert + " " + option_to;
    }
    //centimeter to centimeter
    else if(option_from === "centimeter" && option_to === "centimeter"){
        result.innerText = value +" "+ option_from+ " "+ value + " "+option_to;
    }



}