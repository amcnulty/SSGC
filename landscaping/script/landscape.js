if (window.attachEvent) {window.attachEvent('onload', load);}
else if (window.addEventListener) {window.addEventListener('load', load, false);}
else {document.addEventListener('load', load, false);}
function load() {
    //      FUNCTIONS
    function init() {
        downArrow.style.opacity = "1";
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
            planting.style.marginTop = "70px";
        }
        else if (window.pageYOffset < 580) {
            nav.className = "innerNav";
            planting.style.marginTop = "0px";
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
    
    function showDropdown() {
        dropDown.className = "dropDown-visible";
    }
    
    function hideDropdown() {
        dropDown.className = "dropDown-hidden";
    }
    
    function scrollToPlanting(e) {
        $('html, body').animate({scrollTop: 580}, 600);
    }
    
    function scrollToMulching(e) {
        $('html, body').animate({scrollTop: 1195}, 600);
    }
    
    function myKeypressed(e) {
        // Check that there are only numbers in the calculator box fields
        if(/^[0-9]*$/.test(parseInt(e.target.value)) || /^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(parseFloat(depth.value))) {
            e.target.style.border = "";
        }
        else {
            if (e.target == sqFeet || e.target == depth) {
                e.target.style.border = "3px solid red";
            }
        }
    }
    
    // Show is a boolean true to display error message false to hide it
    function showErrorMessage(show) {
        if (show) {
            mulchErrorMessage.style.visibility = "visible";
            calculationResults.style.visibility = "hidden";
        }
        else mulchErrorMessage.style.visibility = "hidden";
    }
    
    function calculateMulch(e) {
        // If sqft field is not a number || depth field is not a float
        if (!/^[0-9]*$/.test(parseInt(sqFeet.value)) || !/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(parseFloat(depth.value))) {
            showErrorMessage(true);
        }
        else {
            if (sqFeet != null || depth != null) {
                // This is where the calculation is done
                displayResults();
                showErrorMessage(false);
            }
            else showErrorMessage(true);
        }
    }
    
    function displayResults() {
        cubicYards.innerHTML = (parseInt(sqFeet.value) / (324 / parseFloat(depth.value)));
        cubic3foot.innerHTML = (parseInt(sqFeet.value) / (36 / parseFloat(depth.value)));
        cubic2foot.innerHTML = (parseInt(sqFeet.value) / (24 / parseFloat(depth.value)));
        calculationResults.style.visibility = "visible";
        sqFeet.style.border = "";
        depth.style.border = "";
    }
    
    //      VARIABLES
    // The planting button in the header
    var plantingBut = document.getElementById("plantingBut");
    // The mulching button in the header
    var mulchingBut = document.getElementById("mulchingBut");
    // The drainage button in the header
    var drainageBut = document.getElementById("drainageBut");
    // The pruning button in the header
    var pruningBut = document.getElementById("pruningBut");
    // The articles button in the header
    var articlesBut = document.getElementById("articlesBut");
    // The drop down arrow on the articles button
    var downArrow = document.getElementById("downArrow");
    // The drop down menu under the articles button in the header
    var dropDown = document.getElementById("dropDown");
    // The landscape articles button in the drop down menu
    var landscapeArticles = document.getElementById("landscapeArticles");
    // The construction articles button in the drop down menu
    var constructionArticles = document.getElementById("constructionArticles");
    // The lawn care articles button in the drop down menu
    var lawncareArticles = document.getElementById("lawncareArticles");
    // The inner navigation bar that hides when scrolling down
    var nav = document.getElementById("innerNav");
    // Variables used for hiding the inner navigation bar
    var goingDown = false;
    var lastLowPoint;
    var hidden = false;
    var pageScroll;
    // The first section under the inner navigation bar. This section
    // needs to be adjusted when the nav bar attaches/detaches.
    var planting = document.getElementById("planting");
    // The input field for square footage in the mulch calculator section
    var sqFeet = document.getElementById("squareFoot");
    // The input field for mulch depth in the mulch calculator section
    var depth = document.getElementById("depth");
    // The calculate button in the mulch calculator section
    var calculateButton = document.getElementById("MulchCalculateButton");
    // The error message for the mulch calculation
    var mulchErrorMessage = document.getElementById("errorMessage");
    // The results of the calculation
    var calculationResults = document.getElementById("calculatorResults");
    // The cubic yards results
    var cubicYards = document.getElementById("cubicYardsResult");
    // The 3 cubic foot results
    var cubic3foot = document.getElementById("cubic3foot");
    // The 2 cubic foot results
    var cubic2foot = document.getElementById("cubic2foot");
    
    //      EVENT LISTENERS
    // Listen for scrolls
    window.addEventListener("scroll", scroll, false);
    // Scroll to planting section of page when planting button is pressed
    plantingBut.addEventListener("click", scrollToPlanting, false);
    // Scroll to mulching section of page when mulching button is pressed
    mulchingBut.addEventListener("click", scrollToMulching, false);
    // Listen for keypresses for the calculator error checking
    window.addEventListener("keyup", myKeypressed, false);
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
    // Listen for calculate button in mulch section
    calculateButton.addEventListener("click", calculateMulch, false);
    
    
    //      FUNCTION CALLS
    init();
}