$(function(){
    $("#navbarToggle").blur(function(){
        var screenwidth = window.innerWidth;
        if(screenwidth < 768){
            $("#collapsable-nav").collapse('hide');
        }
    });
});