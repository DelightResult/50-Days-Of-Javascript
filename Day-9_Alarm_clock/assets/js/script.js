const select =  document.querySelectorAll("select");
const currentTime = document.querySelector("#currentTime");
let alarmTime, isAlarmSet= false;
ringtone= new Audio('./assets/sound.mp3')


for(let i=12; i>0 ;i-- ){
    i = i< 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    select[0].firstElementChild.insertAdjacentHTML("afterend",option);
}
for(let i=59; i>=0 ;i-- ){
    i = i< 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    select[1].firstElementChild.insertAdjacentHTML("afterend",option);
}
for(let i=2; i>0 ;i-- ){
    let ampm= i == 1 ?"AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    select[2].firstElementChild.insertAdjacentHTML("afterend",option);
}


setInterval(()=>{
    let date = new Date();
    h =date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    ampm = "AM";
    if(h >= 12){
        h = h-12;
        ampm ="PM"
    }

    h= h == 0 ? h =12 : h;

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;
    const timeNow = `${h} : ${m}`;
    currentTime.innerHTML = `${h} : ${m} : ${s} ${ampm}`;
    console.log(alarmTime,timeNow)
    if(alarmTime == timeNow){
        ringtone.play();
        ringtone.loop = true;
        // console.log("time to ring...............")
    }

},1000);



const button = document.querySelector('#button');
button.addEventListener('click',setAlarm);

function setAlarm(e){
    e.preventDefault();

    if(isAlarmSet){
        alarmTime="";
        ringtone.pause();
        button.innerHTML = "Set Alarm";
        return isAlarmSet = false;
    }
    let time = `${select[0].value} : ${select[1].value}`;
    if(time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")){
        alert("some input")
    }
    isAlarmSet = true;
    alarmTime = time;
    // console.log(time);
    button.innerHTML = "Clear Alarm"

}