function isMobileCheck(){
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const desktopDivs = document.querySelectorAll(".desktop");
    const navbuttons = document.querySelectorAll('.navbutton');
    const toplogo = document.getElementById("navlogo");
    const mobiletoplogo = document.getElementById("mobilenavlogo");
    const requestmobile = document.getElementsByClassName('mobile')[0];
    if (isMobile) {
        console.log('is mobile');
        for (var e = 0; e < desktopDivs.length; e++){
            console.log(desktopDivs[e]);
            desktopDivs[e].classList.remove("desktop");
        }
        for (var e = 0; e < navbuttons.length; e++){
            console.log(navbuttons[e]);
            navbuttons[e].classList.add("mobile");
        }
        if (requestmobile){
            requestmobile.style.display = "fixed";
        }
        if (mobiletoplogo){
            mobiletoplogo.style.display = "flex";
        }
        toplogo.style.display = "none";
        console.log(toplogo);

    }else{
        console.log('not mobile');
        if (requestmobile){
            requestmobile.style.display = "none";
        }

    }
}
isMobileCheck();
addEventListener("resize",isMobileCheck);