window.addEventListener("scroll",()=>{
    console.log("hello")
    document.querySelector("nav").classList.toggle("window_scroll",window.scrollY>0)
})