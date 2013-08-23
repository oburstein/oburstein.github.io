//When document loads, check if Browser supports geolocation (returns position object). If so, run success function, if not run error
$(document).ready(function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert("Browser does not support Geo-location");
    }
});

//get coordinates from position object and send call to retrieve weather information. display degrees, city and icon.
function success(position) {
    var location = position.coords.latitude + ',' + position.coords.longitude;
    $.ajax({
        url: "http://api.wunderground.com/api/dfc805df5d6fe1d4/geolookup/conditions/q/" + location + ".json",
        dataType: "jsonp",
        success: function (parsed_json) {
            var city = parsed_json['location']['city'];
            var temp_f = parsed_json['current_observation']['temp_f'];
            var image = parsed_json['current_observation']['icon_url'];
            $('.weather').append(temp_f + "&deg; F");
            $('#weather_icon').attr("src", image);
            $('.city').append(city);
        }
    });
}

//if not able to retrieve location info from browser let user know
function error() {
    $('.weather').append("Was not able to retrieve location information from browser.");
}