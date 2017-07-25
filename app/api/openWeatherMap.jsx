const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=bc34ab94d1ba2dab2f612ff516148c4b&units=imperial';

 function getTemp(location){
  var encodedLocation = encodeURIComponent(location);
  var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
  return axios.get(requestUrl).then(function (res) {
    if(res.data.cod && res.data.message){
      throw new Error(res.data.message)
    }else{
      return res.data.main.temp;
    }
  }, function () {
    throw new Error('Unable to fetch weather for that Location.');
  })
}

function getDescription(location){
  var encodedLocation = encodeURIComponent(location);
  var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
  return axios.get(requestUrl).then(function (res) {
    if(res.data.cod && res.data.message){
      throw new Error(res.data.message)
    }else{
      return res.data.weather[0].description;
    }
  }, function () {
    throw new Error('Unable to fetch weather for that Location.');
  })
}

function getIconId(location){
  var encodedLocation = encodeURIComponent(location);
  var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
  return axios.get(requestUrl).then(function (res) {
    if(res.data.cod && res.data.message){
      throw new Error(res.data.message)
    }else{
      return res.data.weather[0].icon;
    }
  }, function () {
    throw new Error('Unable to fetch weather for that Location.');
  })
}

function getCountryId(location){
  var encodedLocation = encodeURIComponent(location);
  var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
  return axios.get(requestUrl).then(function (res) {
    if(res.data.cod && res.data.message){
      throw new Error(res.data.message)
    }else{
      return res.data.sys.country.toLowerCase();
    }
  }, function () {
    throw new Error('Unable to fetch weather for that Location.');
  })
}
module.exports = {
  "getTemp": getTemp,
  "getDescription": getDescription,
  "getIconId": getIconId,
  "getCountryId": getCountryId
};
