if (window.attachEvent) {window.attachEvent('onload', load);}
else if (window.addEventListener) {window.addEventListener('load', load, false);}
else {document.addEventListener('load', load, false);}
function load() {
    //      FUNCTIONS
    function init() {
        downArrow.style.opacity = "1";
    }
    
    function showDropdown() {
        dropDown.className = "dropDown-visible";
    }
    
    function hideDropdown() {
        dropDown.className = "dropDown-hidden";
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
            dropDown.className = "dropDown-hidden";
        }
        else if (!goingDown && window.pageYOffset >= 750 && lastLowPoint - window.pageYOffset >= 150 && hidden) {
            nav.className = "innerNav-scroll";
            hidden = false;
        }
        pageScroll = window.pageYOffset;
    }
    
    //      VARIABLES
    var landscapeArticles = document.getElementById("landscapeArticles");
    var constructionArticles = document.getElementById("constructionArticles");
    var lawncareArticles = document.getElementById("lawncareArticles");
    var dropDown = document.getElementById("dropDown");
    var articlesBut = document.getElementById("articlesBut");
    var downArrow = document.getElementById("downArrow");
    var goingDown = false;
    var lastLowPoint;
    var hidden = false;
    var pageScroll;
    var nav = document.getElementById("innerNav");
    var resMowing = document.getElementById("resMowing");
    
    //      EVENT LISTENERS
    window.addEventListener("scroll", scroll, false);
    landscapeArticles.addEventListener("click", function() {
        console.log("Link to landscaping articles page");
        // Link to the location of the landscaping articles page
        // document.location = "";
    }, false);
    constructionArticles.addEventListener("click", function() {
        console.log("Link to construction articles page");
        // Link to the location of the construction articles page
        // document.location = "";
    }, false);
    lawncareArticles.addEventListener("click", function() {
        console.log("Link to lawn care articles page");
        // Link to the location of the lawn care articles page
        // document.location = "";
    }, false);
    articlesBut.addEventListener("mouseenter", showDropdown, false);
    articlesBut.addEventListener("mouseleave", hideDropdown, false);
    
    //      FUNCTION CALLS
    init();
}