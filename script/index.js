window.onload = function() {
    //      FUNCTIONS
    function goToContact() {
        $('html, body').animate({scrollTop: $("#contactUs").offset().top - 80}, 600);
    }
    
    function goToTop() {
        $('html, body').animate({scrollTop: 0}, 600);
    }
    
    //      VARIABLES
    var contactUsButton = document.getElementById("HCbut");
    var companyLogo = document.getElementById("companyLogo");
    
    //      EVENT LISTENERS
    contactUsButton.addEventListener("click", goToContact, false);
    companyLogo.addEventListener("click", goToTop, false);
}