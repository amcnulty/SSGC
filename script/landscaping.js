if (window.attachEvent) {window.attachEvent('onload', load);}
else if (window.addEventListener) {window.addEventListener('load', load, false);}
else {document.addEventListener('load', load, false);}
function load() {
    function scroll() {
        if (window.pageYOffset > 300) {
            $("header").attr("class", "attached");
        }
        else {
            $("header").attr("class", "");
        }
        // if ($('#bidBox').offset().top + 650 > $(footer).offset().top - 40) {
            // console.log("Stop Scrolling");
        // }
        // else if (window.pageYOffset > $("#mainContent").offset().top - 50) {
            // }
            if (window.pageYOffset > $("#mainContent").offset().top - 50 && window.pageYOffset < $(footer).offset().top - 800) {
                $("#bidBox").css({ top: (window.pageYOffset - $("#mainContent").offset().top - 50) + 150 + "px"});
        }
    }

    console.log($("#bidBox").offset().top);

    window.addEventListener("scroll", scroll, false);
}