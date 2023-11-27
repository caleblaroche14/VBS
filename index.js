function isMobileCheck(){
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const desktopDivs = document.querySelectorAll(".desktop");
    var requestmobile = document.getElementsByClassName('mobile')[0];
    if (isMobile) {
    console.log('is mobile');
    for (var e = 0; e < desktopDivs.length; e++){
        console.log(desktopDivs[e]);
        desktopDivs[e].classList.remove("desktop");
    }
    requestmobile.style.display = "fixed";
    }else{
        console.log('not mobile');
        requestmobile.style.display = "none";
    }
}
isMobileCheck();
addEventListener("resize",isMobileCheck);