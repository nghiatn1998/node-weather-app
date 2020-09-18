const request = require("request");

const forecast = (longitude, latitude, callback) => {
  if (longitude && latitude) {
    const url = `http://api.weatherstack.com/current?access_key=ad919afcd0e77b517e5cf4c4c8ee4c3d&query=${longitude},${latitude}&units=m`;
    request({ url, json: true }, (error, { body }) => {
      if (error) {
        callback("Unable to connect to weather server !!!");
      } else if (body.error) {
        callback("Unable to find location !!!");
      } else {
        callback(
          null,
          body.current.weather_descriptions[0] +
            `. It's currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degress out.`
        );
      }
    });
  }
};

module.exports = forecast;
