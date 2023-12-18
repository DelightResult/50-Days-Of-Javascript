
 const input = document.getElementById('filterList');
 const li = document.querySelectorAll("li");
 input.addEventListener("keyup",()=>{
    for(i=0;i<li.length;i++){
        let filter = input.value.toLowerCase()
        let data = li[i].innerText.toLowerCase();
        console.log(data);
        if(data.indexOf(filter) > -1){
            console.log("found");
            li[i].style.display = "";
        }else{
            console.log("not found");
            li[i].style.display = "none";
        }
     }
})
 
