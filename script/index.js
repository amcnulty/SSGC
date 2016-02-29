window.onload = function() {
    //      FUNCTIONS
    function calculatePaperLocations() {
        var left = $("#landscapePaper").css("left");
        var top = $("#landscapePaper").css("top");
        LPstyleLeft = parseInt(left);
        LPstyleTop = parseInt(top);
        left = $("#constructionPaper").css("left");
        top = $("#constructionPaper").css("top");
        CstyleLeft = parseInt(left);
        CstyleTop = parseInt(top);
        left = $("#lawnPaper").css("left");
        top = $("#lawnPaper").css("top");
        lawnStyleLeft = parseInt(left);
        lawnStyleTop = parseInt(top);
    }
    
    function setPaperLocations() {
        if (LPstyleTop < 0) {
            LPstyleTop = 0;
        }
        else if (LPstyleTop > 500) {
            LPstyleTop = 500;
        }
        if (LPstyleLeft < 350) {
            LPstyleLeft = 350;
        }
        else if (LPstyleLeft > $windowWidth + 175) {
            LPstyleLeft = $windowWidth + 175;
        }
        landscapePaper.style.left = LPstyleLeft + "px";
        landscapePaper.style.top = LPstyleTop + "px";
        if (CstyleTop < 0) {
            CstyleTop = 0;
        }
        else if (CstyleTop > 500) {
            CstyleTop = 500;
        }
        if (CstyleLeft < 0) {
            CstyleLeft = 0;
        }
        else if (CstyleLeft > $windowWidth - 175) {
            CstyleLeft = $windowWidth - 175;
        }
        constructionPaper.style.left = CstyleLeft + "px";
        constructionPaper.style.top = CstyleTop + "px";
        if (lawnStyleTop < 0) {
            lawnStyleTop = 0;
        }
        else if (lawnStyleTop > 500) {
            lawnStyleTop = 500;
        }
        if (lawnStyleLeft < -350) {
            lawnStyleLeft = -350;
        }
        else if (lawnStyleLeft > $windowWidth - 525) {
            lawnStyleLeft = $windowWidth - 525;
        }
        lawnPaper.style.left = lawnStyleLeft + "px";
        lawnPaper.style.top = lawnStyleTop + "px";
    }
    
    function scroll() {
        if (window.scrollY > 120) reduceHeader();
        else expandHeader();
        if (window.scrollY > 1400) backToTopButton.className = "backToTopButton-visible";
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
    
    function mousedown(e) {
        e.target.addEventListener("mousemove", mousemove, false);
        switch (e.target.id) {
            case "landscapePaper":
                landscapePaper.style.zIndex = "2";
                landscapePaper.style.cursor = "-webkit-grabbing";
                if (lastElementToMove === "lawnPaper") {
                    lawnPaper.style.zIndex = "1";    
                    constructionPaper.style.zIndex = "0";
                }
                else if (lastElementToMove === "landscapePaper") {
                    // do nothing
                }
                else {
                    constructionPaper.style.zIndex = "1";
                    lawnPaper.style.zIndex = "0";
                }
                break;
            case "constructionPaper":
                constructionPaper.style.zIndex = "2";
                constructionPaper.style.cursor = "-webkit-grabbing";
                if (lastElementToMove === "lawnPaper") {
                    lawnPaper.style.zIndex = "1";    
                    landscapePaper.style.zIndex = "0";
                }
                else if (lastElementToMove === "constructionPaper") {
                    // do nothing
                }
                else {
                    landscapePaper.style.zIndex = "1";
                    lawnPaper.style.zIndex = "0";
                }
                break;
            case "lawnPaper":
                lawnPaper.style.zIndex = "2";
                lawnPaper.style.cursor = "-webkit-grabbing";
                if (lastElementToMove === "landscapePaper") {
                    landscapePaper.style.zIndex = "1";
                    constructionPaper.style.zIndex = "0";    
                }
                else if (lastElementToMove === "lawnPaper") {
                    // do nothing
                }
                else {
                    constructionPaper.style.zIndex = "1";
                    landscapePaper.style.zIndex = "0";
                }
                break;
            default:
                break;
        }
        lastElementToMove = e.target.id;
    }
    
    function mouseout(e) {
        mouseup(e);
    }
    
    function mouseup(e) {
        if (e.target.className === "paper") {
            e.target.removeEventListener("mousemove", mousemove);
            e.target.style.cursor = "-webkit-grab";
        }
    }
    
    function mousemove(e) {
        switch (e.target.id) {
            case "landscapePaper":
                LPstyleLeft += e.movementX;
                LPstyleTop += e.movementY;
                break;
            case "constructionPaper":
                CstyleLeft += e.movementX;
                CstyleTop += e.movementY;
                break;
            case "lawnPaper":
                console.log(lawnStyleLeft);
                lawnStyleLeft += e.movementX;
                lawnStyleTop += e.movementY;
                break;
            default:
                break;
        }
        setPaperLocations();
    }
    
    //      VARIABLES
    var $navButtons = $(".navButton");
    var $nav = $(".top");
    var $headerImageDiv = document.getElementById("companyName2");
    var $sliderImages = $("#sliderImages").children();
    var $windowWidth = $(window).width();
    var headerImage = document.getElementById("headerImage");
    var leftArrow = document.getElementById("leftArrow");
    var playOrPause = document.getElementById("playOrPause");
    var playSlideShow = true;
    var rightArrow = document.getElementById("rightArrow");
    var backToTopButton = document.getElementById("backToTopButton");
    var landscapePaper = document.getElementById("landscapePaper");
    var LPstyleLeft;
    var LPstyleTop;
    var constructionPaper = document.getElementById("constructionPaper");
    var CstyleLeft;
    var CstyleTop;
    var lawnPaper = document.getElementById("lawnPaper");
    var lawnStyleLeft;
    var lawnStyleTop;
    var lastElementToMove = "landscapePaper";
    
    //      EVENT LISTENERS
    window.addEventListener("scroll", scroll, false);
    leftArrow.addEventListener("click", rewindSlider, false);
    playOrPause.addEventListener("click", toggleSlideShow, false);
    rightArrow.addEventListener("click", advanceSlider, false);
    backToTopButton.addEventListener("click", goToTop, false);
    landscapePaper.addEventListener("mousedown", mousedown, false);
    constructionPaper.addEventListener("mousedown", mousedown, false);
    lawnPaper.addEventListener("mousedown", mousedown, false);
    landscapePaper.addEventListener("mouseup", mouseup, false);
    constructionPaper.addEventListener("mouseup", mouseup, false);
    lawnPaper.addEventListener("mouseup", mouseup, false);
    landscapePaper.addEventListener("mouseout", mouseout, false);
    constructionPaper.addEventListener("mouseout", mouseout, false);
    lawnPaper.addEventListener("mouseout", mouseout, false);
    
    //      FUNCTION CALLS
    setInterval(function() {
        if (playSlideShow) advanceSlider();
    }, 5000);
    
    calculatePaperLocations();
    setPaperLocations();
}