let index=0;

let circeles=document.querySelectorAll(".circle");


document.querySelector('.next-btn').addEventListener("click",
()=>{
    if(index===0){
        index++;
    }

    circeles[index].classList.add("is-active");
    index=index>=circeles.length-1?index:++index;
});



document.querySelector('.previous-btn').addEventListener('click',
()=>{
    if(index!==0||index<0){
        circeles[index].classList.remove('is-active');

    }
    index=index<=0?0:--index;    
});