let startBtn = document.getElementById("start");
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

// console.log(startBtn,stopBtn,resetBtn);
let hour = 0;
let minute = 0;
let second = 0;
let count= 0;

//start the stopwatch
startBtn.addEventListener('click',()=>{
    timerStart = true;
    stopwatch();
})
stopBtn.addEventListener('click',()=>{
    timerStart = false;
})
resetBtn.addEventListener('click',()=>{
    timerStart = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('count').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('hr').innerHTML = "00";

})


function stopwatch(){
    if(timerStart){
    count++;

    if(count == 100){
        second ++;
        count=0;
    }
    if(second == 60){
        minute ++;
        second = 0;
    }
    if(minute == 60){
        hour ++;
        minute = 0;
        second = 0;
    }

    let hourString = hour;
    let minuteString = minute;
    let secondString = second;
    let countString = count;
    

    countString = count < 10 ? "0" + countString : countString;
    secondString = second < 10 ? "0" + secondString : secondString;
    minuteString = minute < 10 ? "0" + minuteString : minuteString;
    hourString = hour < 10 ? "0" + hourString : hourString;

    document.getElementById('count').innerHTML = countString;
    document.getElementById('sec').innerHTML = secondString;
    document.getElementById('min').innerHTML = minuteString;
    document.getElementById('hr').innerHTML = hourString;
    setTimeout(stopwatch,10);
    }
}