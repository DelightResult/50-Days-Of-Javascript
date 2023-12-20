//set the date we you want couting down to
var countDown = new Date("Dec 20, 2023 15:37:25").getTime()
console.log(countDown);

//update the count down every 1 second
setInterval(function(){

    //get the current date and time
    var now = new Date().getTime();

    //difference between countDown and now
    var diff = countDown - now;

    //TIme calculate fir days, hours , minute and second
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff %(1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    //show expires when coutdown is over
    if(diff < 0){
        document.getElementById("demo").innerHTML = "EXPIRED Come Back After!";
    }

},1000);