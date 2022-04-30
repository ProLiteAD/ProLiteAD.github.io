let menuOpen = false;
const menu = document.getElementById("hidden-menu");

function OpenMenu(){
    const hideNavAnim = document.getElementsByClassName("hide-navigation-animation");

    if(menuOpen){
        menu.style.display = "inline-block";

        for(let i=0; i<hideNavAnim.length; i++){
            setTimeout(function(){
                hideNavAnim[i].classList.add("show-navigation-animation");
            }, 0);
        }
    }
    else{
        menu.style.display = "none";

        for(let i=0; i<hideNavAnim.length; i++){
            hideNavAnim[i].classList.remove("show-navigation-animation");
        }
    }
}

document.getElementById("nav-menu").addEventListener("click", function(){
    if(menuOpen){
        menuOpen = false;
    }
    else{
        menuOpen = true;
    }
    
    OpenMenu();
});