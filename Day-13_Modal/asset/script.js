//get modal
const modal = document.getElementById("modal");
const modalBtn = document.getElementById('modalBtn');

const close = document.getElementsByClassName('close')[0];
const btnCLose = document.getElementById('btnClose');

console.log(btnClose);
btnCLose.onclick = function(){
    modal.style.display = "none";
}
modalBtn.onclick = function(){
    modal.style.display = "block";
}
close.onclick = function(){
    modal.style.display = "none";
}
//when user click anywher outside modal then modal closes
window.onclick = function(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}