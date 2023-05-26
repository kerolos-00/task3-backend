const request = require('request')
const forecast = (latitude, longitude, callback) => {
  const request = require('request')
  const url = "https://api.weatherapi.com/v1/current.json?key=32acd4c51bde4cdcaed91231230905&q=" + latitude + "," + longitude
  request({url,json:true},(error,response)=>{
    if (error) {
      callback("Unable to connect weather service", undefined)
    } else {
      if (response.body.error) {
        callback(response.body.error.message, undefined);
      } else {
        callback(undefined, 'Temperature : ' + response.body.current.temp_c + '°C')
      }
    }
  })
}
module.exports = forecast;
