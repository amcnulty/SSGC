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
            if (window.pageYOffset > $("#mainContent").offset().top - 50 && window.pageYOffset < $(footer).offset().top - 800) {
                $("#bidBox").css({ top: (window.pageYOffset - $("#mainContent").offset().top - 50) + 150 + "px"});
        }
    }

    window.addEventListener("scroll", scroll, false);
}