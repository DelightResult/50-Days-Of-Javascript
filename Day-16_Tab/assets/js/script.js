
const button = document.querySelectorAll('button');
const content = document.querySelectorAll('.content');
button.forEach(b=>{
    b.addEventListener("click",()=>{
        const target= b.value;
        
        //remove active class from all button anditem
        button.forEach((btn)=>btn.classList.remove('active'));
        content.forEach((item)=>item.classList.remove('active'));

        b.classList.add('active');

        document.getElementById(target).classList.add('active');
        
        
    })
    
})