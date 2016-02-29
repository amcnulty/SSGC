window.onload = function() {
    //      FUNCTIONS
    function scroll() {
        if (window.scrollY > 120) reduceHeader();
        else expandHeader();
    }
    
    function goToTop() {
        $('html, body').animate({scrollTop: 0}, 600);
    }
    
    function reduceHeader() {
        for (var i = 0; i < $navButtons.length; i++) {
            $navButtons[i].className = "navButton-scroll unselectable";
        }
        $nav[0].className = "scroll";
        headerImage.src = "res/logo/companyStar.png";
        $headerImageDiv.className = "headerImageDiv-scroll";
    }
    
    function expandHeader() {
        for (var i = 0; i < $navButtons.length; i++) {
            $navButtons[i].className = "navButton";
        }
        $nav[0].className = "top";
        headerImage.src = "res/logo/companyName2.png";
        $headerImageDiv.className = "headerImageDiv";
    }
    
    function advanceSlider() {
        var indexOfTop;
        for (var i = 0; i < $sliderImages.length; i++) {
            if ($sliderImages[i].className === "topImage") {
                indexOfTop = i;
                $sliderImages[i].className = "bottomImage";
            }
        }
        if (indexOfTop + 1 === $sliderImages.length) $sliderImages[0].className = "topImage";
        else $sliderImages[indexOfTop + 1].className = "topImage";
    }
    
    function rewindSlider() {
        var indexOfTop;
        for (var i = 0; i < $sliderImages.length; i++) {
            if ($sliderImages[i].className === "topImage") {
                indexOfTop = i;
                $sliderImages[i].className = "bottomImage";
            }
        }
        if (indexOfTop - 1 === -1) $sliderImages[$sliderImages.length -1].className = "topImage";
        else $sliderImages[indexOfTop - 1].className = "topImage";
    }
    
    function toggleSlideShow() {
        playSlideShow = (playSlideShow ? false : true);
        playOrPause.innerHTML = (playSlideShow ? "&#9616;&#9616;" : "&#9658")
    }
    
    //      VARIABLES
    var $navButtons = $(".navButton");
    var $nav = $(".top");
    var $headerImageDiv = document.getElementById("companyName2");
    var headerImage = document.getElementById("headerImage");
    var $sliderImages = $("#sliderImages").children();
    var leftArrow = document.getElementById("leftArrow");
    var playOrPause = document.getElementById("playOrPause");
    var playSlideShow = true;
    var rightArrow = document.getElementById("rightArrow");
    
    //      EVENT LISTENERS
    window.addEventListener("scroll", scroll, false);
    leftArrow.addEventListener("click", rewindSlider, false);
    playOrPause.addEventListener("click", toggleSlideShow, false);
    rightArrow.addEventListener("click", advanceSlider, false);
    
    //      FUNCTION CALLS
    setInterval(function() {
        if (playSlideShow) advanceSlider();
    }, 5000);
}