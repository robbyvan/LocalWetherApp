$(document).ready(function(){
  getWeather();
});

function getWeather(){
  var latitude;
  var longitude;

  if (!navigator.geolocation) {
    $(".message").html("Geolocation is not supported by this browser.");
  }else {
    navigator.geolocation.getCurrentPosition(function (position){
      latitude = position.coords.latitude.toFixed(4).toString();
      longitude = position.coords.longitude.toFixed(4).toString();

      var apiUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=imperial&appid=e2db5b0453a25a492e87ad8b03046a7c";

      $.ajax({
        dataType: "json",
        url: apiUrl,
        type: "GET",
        success: function(response){
          console.log(response);
          $(".temperature").html(response.main.temp + " F");
          $(".location").html(response.name);
          $(".air").html("Air: " + response.weather[0].description);
          $(".humidity").html("Humidity: " + response.main.humidity);
        },
        error: function(err){
          console.log(err);
        }
      });    
    });
    
  }
}