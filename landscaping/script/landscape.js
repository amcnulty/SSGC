if (window.attachEvent) {window.attachEvent('onload', load);}
else if (window.addEventListener) {window.addEventListener('load', load, false);}
else {document.addEventListener('load', load, false);}
function load() {
    function button(e) {
        alert(window.pageYOffset);
    }
    
    function scroll(e) {
        if (pageScroll < window.pageYOffset) {
            goingDown = true;
            lastLowPoint = window.pageYOffset;
        }
        else if (pageScroll > window.pageYOffset) {
            goingDown = false;
        }
        if (window.pageYOffset >= 580 && window.pageYOffset < 750) {
            nav.className = "innerNav-scroll";
            hidden = false;
            resMowing.style.marginTop = "70px";
        }
        else if (window.pageYOffset < 580) {
            nav.className = "innerNav";
            resMowing.style.marginTop = "0px";
        }
        if (goingDown && window.pageYOffset >= 750 && !hidden) {
            nav.className = "innerNav-scroll-hidden";
            hidden = true;
            console.log("HIDING");
        }
        else if (!goingDown && window.pageYOffset >= 750 && lastLowPoint - window.pageYOffset >= 150 && hidden) {
            nav.className = "innerNav-scroll";
            hidden = false;
            console.log("SHOWING");
        }
        pageScroll = window.pageYOffset;
    }
    
    var goingDown = false;
    var lastLowPoint;
    var hidden = false;
    var pageScroll;
    var nav = document.getElementById("innerNav");
    var resMowing = document.getElementById("resMowing");
    window.addEventListener("keypress", button, false);
    window.addEventListener("scroll", scroll, false);
}