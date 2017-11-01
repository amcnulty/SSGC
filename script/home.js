if (window.attachEvent) {window.attachEvent('onload', load);}
else if (window.addEventListener) {window.addEventListener('load', load, false);}
else {document.addEventListener('load', load, false);}
function load() {

    function scroll() {
        if (window.pageYOffset > 600) {
            $("header").attr("class", "attached");
        }
        else {
            $("header").attr("class", "");
        }
    }

    var downButton = document.getElementById("downButton");

    downButton.addEventListener("click", function() {
        console.log("I WAS CLICKED");
        $('html, body').animate({scrollTop: $("#services").offset().top - 100}, 600);
    });

    window.addEventListener("scroll", scroll, false);
    
}