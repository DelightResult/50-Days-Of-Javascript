
let startBtn = document.getElementById("btn-start");
let resetBtn = document.getElementById("btn-reset");
let pauseBtn = document.getElementById("btn-pause");


let time =  document.getElementById("time");
let set;
let count = 59;
let minCount = 24;
time.textContent = `${minCount + 1}: 00`;

const appendZero = (value)=>{
    value = value < 10 ? `0${value}` : value;
    return value;
};

startBtn.addEventListener("click",()=>{
    pauseBtn.classList.add("show");
    resetBtn.classList.add("show");
    resetBtn.classList.remove("hide");
    pauseBtn.classList.remove("hide");
    startBtn.classList.add("hide");
    console.log("start btn")
    set = setInterval(()=>{
        count --;
        time.textContent = `${appendZero(minCount)}:${appendZero(count)}`
        if(count == 0){
            minCount--;
            count = 60;
        }
    },1000);
})

pauseBtn.addEventListener("click",()=>{
    startBtn.classList.remove("hide");
    pauseBtn.classList.add("hide");
    console.log("pause cliceks")
    paused = true;
    clearInterval(set);
})

resetBtn.addEventListener("click",()=>{
    resetBtn.classList.remove("show")
    startBtn.classList.add("show");
    startBtn.classList.remove("hide");
    pauseBtn.classList.remove("show");
    pauseBtn.classList.add("hide");
    resetBtn.classList.add("hide")
    console.log("i am reset");
    count = 59;
    minCount =24;
    clearInterval(set)
    time.textContent = `${minCount + 1}:00`;
})