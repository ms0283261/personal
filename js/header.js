let hamburger_checked = document.getElementById("hamburger_nav");
let hamburger_label = document.getElementsByClassName("hamburger")[0];
hamburger_checked.addEventListener("click",function(){
  if(hamburger_checked.checked){
    hamburger_label.classList.add("coolX");
  }else{
    hamburger_label.classList.remove("coolX");
  }
})