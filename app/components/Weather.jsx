const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: false
    }
    this.handleSearch = this.handleSearch.bind(this);
  };

  handleSearch(location){
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp,
      });
    }, function (errorMessage) {
      console.log(errorMessage);
    });

    openWeatherMap.getDescription(location).then(function(description){
      that.setState({
        description:description
      });
    }, function (errorMessage) {
      console.log(errorMessage);
    });
    debugger;
    openWeatherMap.getIconId(location).then(function(iconID){
      that.setState({
        iconID: iconID
      });
    }, function (errorMessage) {
      console.log(errorMessage);
    });

    openWeatherMap.getCountryId(location).then(function(countryID){
      that.setState({
        isLoading: false,
        countryID: countryID
      });
    }, function (errorMessage) {
      that.setState({isLoading: false});
      console.log(errorMessage);
    });
  }
  render() {
    var {isLoading, location, temp, description, iconID, countryID} = this.state;

    function renderMessage() {
      if(isLoading){
        return <h3>Fetching data...</h3>
      }else if(location && temp && description && iconID && countryID){
        return <WeatherMessage location={location} temp={temp} description={description} iconID={iconID} countryID={countryID}/>;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
}

module.exports = Weather;
