const header=document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle("stickey", this.window.scrollY >0);
})