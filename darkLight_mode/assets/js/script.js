let particleList = document.getElementById("elementary_particles");
function lightMode(){
    particleList.classList.remove("darkmode");
    particleList.classList.add("lightmode");
}
function darkMode(){
    particleList.classList.remove("lightmode");
    particleList.classList.add("darkmode");
}