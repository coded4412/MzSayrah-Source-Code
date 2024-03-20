modal = document.querySelector("#modal")
close_button=document.querySelector(".close-button")
hm_button=document.querySelector("#hm-button")

hm_button.addEventListener("click",()=>{
    modal.style.display="block"
})
close_button.addEventListener("click",()=>{
    modal.style.display="none"
})