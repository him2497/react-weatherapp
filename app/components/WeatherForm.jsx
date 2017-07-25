const React = require('react');

class WeatherForm extends React.Component{
  constructor(props){
    super(props);
    this.GetWeather = this.GetWeather.bind(this);
  }
  GetWeather(e) {
    e.preventDefault();
    const location = this.refs.location.value;
    if(location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }
  render(){
    return(
      <div>
        <form onSubmit={this.GetWeather}>
          <input placeholder="Enter city name" type="text" ref="location"/>
          <button placeholder="Get Weather" className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
}

module.exports = WeatherForm;
