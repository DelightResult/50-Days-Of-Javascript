const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const ampm = document.getElementById("ampm");
// console.log(hour,minute,second);

function clock(){
    let h = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let am = "AM"
    //checking the value of am pm by hours
    if(h >=12){
        if(h >12) h =h -12;
        am="PM"
    }else if(h ==0){
        h =12;
        am= "AM";
    }

    //terniary operator
    h = h<10 ? "0" + h : h;
    min = min <10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    

    hour.innerText = h;
    minute.innerText = min;
    second.innerText = sec;
    ampm.innerText = am;

    setTimeout(()=>{
        clock();
    },1000);
}
clock();