$(function(){
    $("#navbarToggle").blur(function(){
        var screenwidth = window.innerWidth;
        if(screenwidth < 768){
            $("#collapsable-nav").collapse('hide');
        }
    });
});

(function(global){
    var dc={};
    var homehtml = "snippets/home-snippet.html";

    // convinience function for inserting innerhtml for 'select'
    var insertHtml = function (selector, html){
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };

    // show loading icon inside element identified by selector
    var showLoading = function(selector){
        var html = "<div class='text-center'><img src='images/ajax-loader.gif'></div>";
        insertHtml(selector,html);
    };

    // on page load (befor images or css)
    document.addEventListener("DOMContentLoaded",function(event){
        
        // on first load, show home view
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            homehtml,
            function(responseText){
                document.querySelector("#main-content").innerHTML = responseText;
            },
            false);
    });

    global.$dc = dc;
})(window);