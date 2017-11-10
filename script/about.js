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
    }

    window.addEventListener("scroll", scroll, false);
}