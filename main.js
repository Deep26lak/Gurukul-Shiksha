window.addEventListener("scroll",()=>{
    console.log("hello")
    document.querySelector("nav").classList.toggle("window_scroll",window.scrollY>0)
})

//  FAQ section

const faqs =  document.querySelectorAll(".faq")

faqs.forEach(faq=>{
    faq.addEventListener("click",()=>{
        
        faq.classList.toggle("open")
        
         // changing iconn
         const icon = faq.querySelector(".faq__icon i")
         if(icon.className === "fa-solid fa-plus"){
            icon.className = "fa-solid fa-minus"
         } else{
            icon.className = "fa-solid fa-plus"
         }


    })
})

// ====================  menu item  =====================
const menu = document.querySelector(".nav__menu")
const openMenuBtn = document.querySelector("#open-menu-btn")
const closeMenuBtn = document.querySelector("#close-menu-btn")

openMenuBtn.addEventListener("click", ()=>{
     menu.style.display = "flex"
     closeMenuBtn.style.display= "inline-block"
     openMenuBtn.style.display= 'none'
})
closeMenuBtn.addEventListener("click",()=>{
    menu.style.display= 'none'
    closeMenuBtn.style.display= "none"
    openMenuBtn.style.display= 'inline-block'
 })