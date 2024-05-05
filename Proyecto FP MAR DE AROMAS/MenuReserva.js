function togglemobilemenu(element){
    element.classList.toggle("change");
    var mobileMenu = document.getElementById("mobilemenu");
    mobileMenu.classList.toggle("open");
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none"; 
    } else {
        mobileMenu.style.display = "block";
    }
}
document.addEventListener("DOMContentLoaded", function() {
  VanillaTilt.init(document.querySelectorAll(".Desplazable, .Item img"), {
      max: 25,
      speed: 400,
  });
});

document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
})