
const button = document.querySelector("#btn");

button.addEventListener("click",calculateBMI);

function calculateBMI(){
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result= document.querySelector('#result');
    
    //checking if the value of height and weight is nan 
    if(height ==="" || isNaN(height) ||weight==="" || isNaN(weight)){
        result.innerHTML = "Provide valid input";
        result.style.color = "red";
    }else{
        //toFixed() to get only to digit after decimal
        let BMI = (weight / ((height*height)/10000)).toFixed(2);
        
        if(BMI < 18.6){
            result.innerHTML = `Under Weight : <span>${BMI}</span>`;
            result.style.color = "red";
        }else if(BMI >=18.6 && BMI < 24.9){
            result.innerHTML = `Normal: <span>${BMI}</span>`;
            result.style.color = "green";
        }else{
            result.innerHTML = `Over Weight: <span>${BMI}</span>`;
            result.style.color = "red";
        }
    }
}