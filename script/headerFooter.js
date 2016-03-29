window.onload = function() {
    //      FUNCTIONS
    function scroll() {
        if (window.pageYOffset >= 80) reduceHeader();
        else expandHeader();
        if (window.pageYOffset > 1400) backToTopButton.className = "backToTopButton-visible";
        else backToTopButton.className = "backToTopButton";
    }
    
    function goToTop() {
        $('html, body').animate({scrollTop: 0}, 600);
    }
    
    function reduceHeader() {
        for (var i = 0; i < $navButtons.length; i++) {
            $navButtons[i].className = "navButton-scroll unselectable";
        }
        $nav[0].className = "scroll";
        $headerImageDiv.className = "headerImageDiv-scroll";
    }
    
    function expandHeader() {
        for (var i = 0; i < $navButtons.length; i++) {
            $navButtons[i].className = "navButton";
        }
        $nav[0].className = "top";
        $headerImageDiv.className = "headerImageDiv";
    }
    
    //      VARIABLES
    var $navButtons = $(".navButton");
    var homeBut = document.getElementById("home");
    var landscapeBut = document.getElementById("landscape");
    var constructBut = document.getElementById("construction");
    var lawnBut = document.getElementById("lawnCare");
    var aboutBut = document.getElementById("aboutUs");
    var contactBut = document.getElementById("contactUs");
    var $nav = $(".top");
    var $headerImageDiv = document.getElementById("companyName2");
    var backToTopButton = document.getElementById("backToTopButton");
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var isAndroid = /Android/.test(navigator.userAgent) && !window.MSStream;
    
    //      EVENT LISTENERS
    homeBut.addEventListener("click", function() {
        window.location.href = "http://www.starsandstripesgc.com";
    }, false);
    landscapeBut.addEventListener("click", function() {
        window.location.href = "../landscaping";
    }, false);
    constructBut.addEventListener("click", function() {
        window.location.href = "../construction";
    }, false);
    lawnBut.addEventListener("click", function() {
        window.location.href = "../lawn-care";
    }, false);
    aboutBut.addEventListener("click", function() {
        window.location.href = "../about-us";
    }, false);
    contactBut.addEventListener("click", function() {
        window.location.href = "../contact-us";
    }, false);
    window.addEventListener("scroll", scroll, false);
    backToTopButton.addEventListener("click", goToTop, false);
}