$(document).ready(function (){
var city = "Chicago, US";
var key = "b7cee8dba72fd2e840f3a97a9d8a98d2";
var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key;


  function convert_string(str) {
    for (var i = 0; i <str.length; i++) {
      return str[0].toUpperCase() + str.slice(1);
    }
  }

  function convert_temp(kelvin) {
    return Math.ceil(kelvin * (9/5) - 459.67);
  }

//1. $.getJSON(url, callback);
$.getJSON(url, function (response) {
  var data = response;
  $('#city_name').html(data.name);
  $('#conditions').html(convert_string(data.weather[0].description));
  $('#current').html(convert_temp(data.main.temp));
  $('#high').html(convert_temp(data.main.temp_max));
  $('#low').html(convert_temp(data.main.temp_min));

});
});
