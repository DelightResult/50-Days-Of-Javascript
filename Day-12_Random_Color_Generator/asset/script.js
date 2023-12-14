const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const buttonRandomGenerate = document.getElementById("randomColorButton");
const colorhexValue = document.getElementById("colorhexValue");
const color_info = document.querySelector(".color-info");


//genrate random number function
function generateRandomNumber(){
    return Math.floor(Math.random() * hexCharacters.length);
};

//onCLick genrate random color
buttonRandomGenerate.addEventListener("click",() =>{
    let color = "#";
    for(let i=0 ; i < 6; i++){
        color += hexCharacters[generateRandomNumber()];
    }
    colorhexValue.innerHTML = color;
    color_info.style.backgroundColor = color;
    console.log(color,"colors")
})
