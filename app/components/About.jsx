const React = require('react');

class About extends React.Component{
  render() {
    return(
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>
          Welcome to the about page of my react weather app.
          This app is using React, OpenWeatherMap for data and Foundation for styling.
          I build this application for The Complete React Web App Developer Course.
        </p>
        <p>
          Here are the links to the tools used in this Project:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> The JavaScript library used
          </li>
          <li>
            <a href="https://openweathermap.org/">Open Weather Map</a> for fetching the weather
          </li>
          <li>
            <a href="http://foundation.zurb.com/sites/docs/">Foundation 6</a> for Styling the page
          </li>
          <li>
            <a href="https://github.com/mzabriskie/axios">Axios</a> for HTTP requests
          </li>
        </ul>
      </div>
    );
  }
}

module.exports = About;
