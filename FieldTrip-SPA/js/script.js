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
    var allCategoriesUrl = "http://davids-restaurant.herokuapp.com/categories.json";
    var categoriesTitleHtml = "snippets/categories-title-snippet.html";
    var categoryHtml = "snippets/category-snippet.html";

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

    // Return substitute of '{{propName}} with propvalue in given 'string'
    var insertProperty = function(string, propName, propValue){
        var propToReplace = "{{" + propName + "}}";
        string = string.replace(new RegExp(propToReplace,"g"),propValue);
        return string;
    }

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

    // load the menu categories view
    dc.loadMenuCatigories = function(){
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            allCategoriesUrl,
            buildAndShowCategoriesHtml,
            true
        );
    };

    // build html for the categiries page based on the data from server
    function buildAndShowCategoriesHtml(categories){
        // load title sinppet of categories page
        $ajaxUtils.sendGetRequest(
            categoriesTitleHtml,
            function(categoriesTitleHtml){
                //retrive single category snippet
                $ajaxUtils.sendGetRequest(
                    categoryHtml,
                    function(categoryHtml){
                        var categoriesViewHtml = buildCategoriesViewHtml(
                            categories,
                            categoriesTitleHtml,
                            categoryHtml);
                            insertHtml("#main-content",categoriesViewHtml);
                    },
                    false
                );
            },
            false
        );
    }

    // using categories data and snippets html
    // build categories view html to be inserted into page
    function buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml){
       var finalHtml = categoriesTitleHtml;
       finalHtml += "<section class='row'>";

       // loop over categories
       for (var i = 0; i < categories.lenght; i++) {
        // insert category values
        var html = categoryHtml;
        var name = "" + categories[i].name;
        var short_name = categories[i].short_name;
        html = insertProperty(html, "name", name);
        html = insertProperty(html, "short_name", short_name);
        finalHtml += html;
       }
       finalHtml +="</section>";
       return finalHtml;
 
    }
    

    global.$dc = dc;
})(window);