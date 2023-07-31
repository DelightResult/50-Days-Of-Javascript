const dateInput = document.getElementById('date');
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click",calculateAge);

var date = new Date();
var dateNow = date.getDate();
var monthNow = date.getMonth() + 1;
var yearNow = date.getFullYear();
// console.log(dateNow,monthNow,yearNow);
var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


function calculateAge(){
    const Bdate = dateInput.value;
    console.log(Bdate)
    const dateSplit = Bdate.split("-");
    const birthYear = dateSplit[0];
    const birthMonth = dateSplit[1];
    const birthDate = dateSplit[2];

    // console.log(birthDate,birthMonth,birthYear);
    if(birthDate > dateNow){
        dateNow = dateNow + month[birthMonth - 1];
        monthNow = monthNow - 1;
    }
    if(birthMonth > monthNow){
        monthNow = monthNow + 12;
        yearNow  = yearNow - 1;
    }
    console.log(dateNow,"date")
    var d =dateNow - birthDate;
    var m = monthNow - birthMonth;
    var y = yearNow - birthYear;

    console.log(y,m,d);
    result.innerHTML= "You are " +y +" Years " +m+ " Months " +d+ " Days old" ;
}