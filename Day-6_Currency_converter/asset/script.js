const api = "https://api.exchangerate-api.com/v4/latest/USD";

let search= document.querySelector("#amount");
let fromCurreny = document.querySelector(".fromCurrency");
let toCurrency = document.querySelector(".toCurrency");
let finalValue = document.querySelector(".finalValue");
let finalAmount = document.querySelector("#finalAmount")
let resultFrom;
let resultTo;
let searchvalue= search.value;

let buttonSubmit = document.querySelector('button[type="submit"]');
let buttonReset = document.querySelector('button[type="reset"]');

buttonReset.addEventListener("click",()=>{
    window.location.reload();
    search.value = "";
})

//when currency changed
fromCurreny.addEventListener('change',(e)=>{
    resultFrom = `${e.target.value}`;
    console.log(resultFrom);
})

toCurrency.addEventListener('change',(e)=>{
    resultTo = `${e.target.value}`;
    console.log(resultTo);
})

search.addEventListener('input',(e)=>{
    searchvalue = e.target.value;
})

buttonSubmit.addEventListener('click',getResult);

async function getResult(){
    await fetch(api).then(currency=>{
        return currency.json();
    }).then(displayresult);
}

function displayresult(currency){
    console.log(searchvalue)
    if(searchvalue === "" || searchvalue === undefined){
        alert("Enter Some Value!");
    }else{
        console.log(currency,"cur")
        let fromRate = currency.rates[resultFrom];
        let toRate = currency.rates[resultTo];
        value = ((toRate / fromRate) * searchvalue).toFixed(2);
        // console.log(finalValue);
        finalValue.innerHTML= value;
        finalValue.style.color= "green";
        finalAmount.style.display = "block";
    }
}

