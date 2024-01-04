const projectBtn = document.getElementById("btn1");
const skillsBtn = document.getElementById("btn2");
const projectShow = document.getElementById("project-show");
const skillShow = document.getElementById("skills-show");

projectBtn.addEventListener("click", function(){
    projectShow.style.display = "block" ;
    skillShow.style.display = "none" ;
 })

skillsBtn.addEventListener("click", function(){
   skillShow.style.display = "block" ;
   projectShow.style.display = "none";
})


