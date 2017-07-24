const React = require('react');

class WeatherMessage extends React.Component {
  render() {
    var {location, temp, description, iconID, countryID} = this.props;
    var IMG_URL = "http://openweathermap.org/img/w/"+iconID+".png";
    var COUNTRY_URL = "http://openweathermap.org/images/flags/"+countryID+".png";
    return (
      <div>
        <p>The temperature in {location} <img src={COUNTRY_URL}/> is {temp} and the weather looks like {description}</p>
        <img src={IMG_URL}/>
      </div>
    )
  }
}

module.exports = WeatherMessage;
