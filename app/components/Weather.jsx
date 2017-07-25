const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');
const ErrorModal = require('ErrorModal');

class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
    }
    this.handleSearch = this.handleSearch.bind(this);
  };

  handleSearch(location){
    var that = this;

    this.setState({isLoading: true,
      errorMessage: undefined });

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });

    openWeatherMap.getDescription(location).then(function(description){
      that.setState({
        description:description
      });
    }, function (errorMessage) {
      console.log(errorMessage);
    });
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
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
      console.log(errorMessage);
    });
  }
  render() {
    var {isLoading, location, temp, description, iconID, countryID, errorMessage} = this.state;

    function renderMessage() {
      if(isLoading){
        return <h3 className="text-center">Fetching data...</h3>
      }else if(location && temp && description && iconID && countryID){
        return <WeatherMessage location={location} temp={temp} description={description} iconID={iconID} countryID={countryID}/>;
      }
    }

    function renderError() {
      if(typeof errorMessage === "string"){
        return(
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}

module.exports = Weather;
