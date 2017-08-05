const React = require('react');
const ReactDOM = require('react-dom');
var {Route, Router, BrowserRouter} = require('react-router-dom');
const Main = require('Main');
const Weather = require('Weather');
const About = require('About');
const Examples = require('Examples');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <BrowserRouter history={history}>
      <Main>
        <Route exact path="/" component={Weather}/>
        <Route path="/about" component={About}/>
        <Route path="/examples" component={Examples}/>
      </Main>
    </BrowserRouter>,
      document.getElementById('app'));
