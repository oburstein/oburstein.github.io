var temp_f,temp_c;
$(document).ready(function(){$("#fahrenheit").addClass("active");$("#fahrenheit").click(function(){$(".weather").replaceWith('<h3 class="weather">'+temp_f+"&deg;F</h3>");$("#fahrenheit").addClass("active");$("#celsius").removeClass("active")});$("#celsius").click(function(){$(".weather").replaceWith('<h3 class="weather">'+temp_c+"&deg;C</h3>");$("#celsius").addClass("active");$("#fahrenheit").removeClass("active")});$(".page").append('<img class="bg" src="images/sunset.jpg" alt="bg">').hide().fadeIn(1E3);$(".title").append("Local Weather").hide().fadeTo(1500,
1);navigator.geolocation.getCurrentPosition(function(b){$.ajax({url:"http://api.wunderground.com/api/dfc805df5d6fe1d4/geolookup/conditions/q/"+(b.coords.latitude+","+b.coords.longitude)+".json",dataType:"jsonp",timeout:1E4,success:function(a){var b=a.location.city,c=a.location.state;temp_f=a.current_observation.temp_f;temp_c=a.current_observation.temp_c;a=chooseIcon(a.current_observation.icon);$(".weather").append(temp_f+"&deg;F").hide().fadeTo(1500,1);$(".icon").append(a).hide().fadeTo(1500,1);$(".city").append(b+
", "+c).hide().fadeTo(1500,1)}})})});function lockScroll(){event.preventDefault()}function chooseIcon(b){switch(b){case "clear":return"B";case "cloudy":return"N";case "flurries":return"U";case "fog":return"L";case "hazy":return"M";case "mostlycloudy":return"H";case "mostlysunny":return"H";case "partlycloudy":return"H";case "partlysunny":return"H";case "rain":return"R";case "snow":return"X";case "sunny":return"B";case "tstorms":return"0";default:return")"}};