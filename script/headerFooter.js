if (window.attachEvent) {window.attachEvent('onload', load);}
else if (window.addEventListener) {window.addEventListener('load', load, false);}
else {document.addEventListener('load', load, false);}
function load() {
    function loadTemplates(templates, loadingComplete) {
        var count = 0;
        for (var i = 0; i < templates.length; i++) {
            $(templates[i]).load(templates[i].dataset.include, function() {
                    count++;
                    if (count == templates.length) {
                        loadingComplete();
                    }
            });
        }
    }
    var templates = document.querySelectorAll("[data-include]");
    loadTemplates(templates, function() {
        console.log("Templates Loaded");
    });
    $(document).on('click', '#headerHome', function() {
        window.location = 'index.html';
    });
    $(document).on('click', '#headerLandscaping', function() {
        window.location = 'landscaping.html';
    });
    $(document).on('click', '#headerConstruction', function() {
        window.location = 'construction.html';
    });
    $(document).on('click', '#headerLawn', function() {
        window.location = 'lawn-care.html';
    });
    $(document).on('click', '#headerAbout', function() {
        window.location = 'about.html';
    });
    $(document).on('click', '#headerContact', function() {
        window.location = 'contact.html';
    });
}