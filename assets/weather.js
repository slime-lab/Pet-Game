function weather() {

    var APIKey = "910aa09874972b641a7cffc1fbba6a8b";
    var lat = 0;
    var lon = 0;

    //this is the function to pull the geo location and set it within the API URL
    navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;

        console.log(lat);
        console.log(lon);


        // Here we are building the URL we need to query the database
        var queryURL = '//api.openweathermap.org/data/2.5/weather?' + 'lat=' + lat + '&lon=' + lon + '&units=imperial' + '&appid=' + APIKey;

        // We then created an AJAX call
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            // Create CODE HERE to Log the queryURL
            console.log(queryURL);
            // Create CODE HERE to log the resulting object
            console.log(response);
            // Create CODE HERE to transfer content to HTML
            var weather = (response);
            console.log(weather);
            // Create CODE HERE to calculate the temperature (converted from Kelvin)
            var Fahrenheit = (weather.main.temp);
            console.log(Fahrenheit);
            //Get time and compare to sunrise
            var dayornight = "";
            daytime();
            function daytime() {
                var d = new Date();
                var n = d.getTime();
                var sunrise = (response.sys.sunrise)
                var sunset = (response.sys.sunset)

                console.log(sunrise);
                console.log(sunset);
                var convTime = Math.floor(Date.now() / 1000);
                console.log(convTime)

                var sunset = (response.sys.sunset)
                if (convTime > sunrise && convTime < sunset) {
                    dayornight = "day";
                }
                else {
                    dayornight = "night";
                }
            }
            currentWeather = response.weather[0].main;
            // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
            // Create CODE HERE to dump the temperature content into HTML
            $(".wind").append("windspeed: " + response.wind.speed)
            $(".humidity").append("humidity: " + response.main.humidity)
            $(".temp").append("Temp: " + Fahrenheit)
            $(".temp").append("<br><br>" + response.weather[0].main);
            $(".temp").append("<br><br>" + response.weather[0].description);
            $(".temp").append("<br><br>" + dayornight);

            //Day or night function
            if (dayornight == "day") {
                //set day icon
                $(".displaySunImg").attr("src", "images/weather/clear.gif")
                $(".displayMoonImg").attr("src", "")
                console.log("test")
            }
            else {
                //set night icon
                $(".displayMoonImg").attr("src", "images/weather/clearnight.gif")
                $(".displaySunImg").attr("src", "")
            }

            //this sets weather icon~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            if (currentWeather == "Rain" || currentWeather == "Thunderstorm" || currentWeather == "Drizzle" || currentWeather == "Snow") {
                //set rain icon
                $(".displayCloudsImg").attr("src", "images/weather/rain.gif")
            }
            else if (currentWeather == "Clouds" || currentWeather == "Fog" || currentWeather == "Mist") {
                //set clouds icon
                $(".displayCloudsImg").attr("src", "images/weather/clouds.gif")
            }
            else{
                $(".displayCloudsImg").attr("src", "")
            };



            //this sets the background to be day or night
            if (dayornight == "day") {
                //set background to day
            }
            else {
                //set background to night
            }
        });

    })
}
