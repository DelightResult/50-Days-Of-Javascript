console.log("hell");

const faq = document.querySelectorAll(".faq");

faq.forEach((element,index)=>{
    element.addEventListener("click",function(){
        element.classList.toggle("open")

        const faq_section = element.nextElementSibling;
        const rotate = element.querySelector(".rotate");

        if(element.classList.contains("open")){
            faq_section.style.display="block";
            rotate.style.transform = "rotate(-180deg)";
        }else{
            faq_section.style.display="none";
            rotate.style.transform = "rotate(0deg)";
        }
        removeOpen(index)
    })
})

function removeOpen(index1){
    console.log(index1)
    faq.forEach((item2,index2)=>{
        if(index1 != index2){
            item2.classList.remove("open")
            console.log("not equal")
            let des = item2.nextElementSibling;
            const rotate = item2.querySelector(".rotate");
            des.style.display= "none";
            rotate.style.transform = "rotate(0deg)";
        }
    })
}