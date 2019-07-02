$(document).ready(function(){
    
    //Philadelphia weather
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=philadelphia,us&appid=7a1b3403d3345a747633446a6905bb5e";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);

        var newkelvin = response.main.temp;
        var newfarenheit = Math.floor((newkelvin - 273.15) * (9 / 5) + 32);
        var newimg_url = "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
        var newnewimg = $("<img>");

        $("#philly").empty();
        $("#philly").append("<img src='" + newimg_url + " ' />" + newfarenheit + " F");
        localStorage.setItem("philTemp", newfarenheit);
    });

    //Destination Weather
    $("#find-city").on("click", function (event) {
        event.preventDefault();
    
        var destination = $("#destination").val();
    
        var destQueryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + destination + ",us&appid=7a1b3403d3345a747633446a6905bb5e";
    
        $.ajax({
            url: destQueryURL,
            method: "GET"
        }).then(function (destResponse) {
    
            console.log(destResponse);
    
            var kelvin = destResponse.main.temp;
            var farenheit = Math.floor((kelvin - 273.15) * (9 / 5) + 32);
            var img_url = "http://openweathermap.org/img/w/" + destResponse.weather[0].icon + ".png"
            var newimg = $("<img>");
    
            $("#view-this").empty();
            newimg.attr("src", img_url);
            newimg.attr("alt", "weather image")
            $("#view-this").html(destResponse.name);
            $("#view-this").append("<p>" + destResponse.weather[0].description + "</p>");
            $("#view-this").append("<img src='" + img_url + " ' />" + farenheit + " F");
    
        });

    });

});

