const React = require('react');

class WeatherMessage extends React.Component {
  render() {
    var {location, temp, description, iconID, countryID} = this.props;
    var IMG_URL = "http://openweathermap.org/img/w/"+iconID+".png";
    var COUNTRY_URL = "http://openweathermap.org/images/flags/"+countryID+".png";
    return (
      <div>
        <div className="columns large-10">
          <h4 className="text-center">The temperature in {location} <img src={COUNTRY_URL} width="25" height="25"/> is {temp} and the weather looks like {description}</h4>
        </div>
        <div className="columns large-2">
          <img src={IMG_URL} className="text-center" width="75" height="75"/>
        </div>
      </div>
    )
  }
}

module.exports = WeatherMessage;
