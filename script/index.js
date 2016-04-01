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
        if (iOS) {
            LPstyleLeft = 500;
            CstyleLeft = 482;
        }
        else if (!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
            LPstyleLeft = $windowWidth / 2;
            CstyleLeft = $windowWidth / 2;
            lawnStyleLeft = $windowWidth / 2;
        }
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
        CX = e.clientX;
        CY = e.clientY;
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
    
    function touchstart(e) {
        CX = e.pageX;
        CY = e.pageY;
        e.target.addEventListener("touchmove", touchmove, false);
        switch (e.target.id) {
            case "landscapePaper":
                landscapePaper.style.zIndex = "2";
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
                LPstyleLeft += (e.clientX - CX);
                LPstyleTop += (e.clientY - CY);
                break;
            case "constructionPaper":
                CstyleLeft += (e.clientX - CX);
                CstyleTop += (e.clientY - CY);
                break;
            case "lawnPaper":
                lawnStyleLeft += (e.clientX - CX);
                lawnStyleTop += (e.clientY - CY);
                break;
            default:
                break;
        }
        CX = e.clientX;
        CY = e.clientY;
        setPaperLocations();
    }
    
    function touchmove(e) {
        e.preventDefault();
        CstyleLeft += (e.pageX - CX);
        CstyleTop += (e.pageY - CY);
        CX = e.pageX;
        CY = e.pageY;
        setPaperLocations();
    }
    
    //      VARIABLES
    var $navButtons = $(".navButton");
    var $nav = $(".top");
    var $headerImageDiv = document.getElementById("companyName2");
    var $sliderImages = $("#sliderImages").children();
    var $windowWidth = $(window).width();
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
    var CX;
    var CY;
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var isAndroid = /Android/.test(navigator.userAgent) && !window.MSStream;
    
    //      EVENT LISTENERS
    window.addEventListener("scroll", scroll, false);
    leftArrow.addEventListener("click", rewindSlider, false);
    playOrPause.addEventListener("click", toggleSlideShow, false);
    rightArrow.addEventListener("click", advanceSlider, false);
    backToTopButton.addEventListener("click", goToTop, false);
    landscapePaper.addEventListener("mousedown", mousedown, false);
    constructionPaper.addEventListener("mousedown", mousedown, false);
    constructionPaper.addEventListener("touchstart", touchstart, false);;
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