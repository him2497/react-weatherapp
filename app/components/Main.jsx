const React = require('react');
const Navigation = require('Navigation');

class Main extends React.Component{
  render() {
      return (
        <div>
          <Navigation/>
          <h1>Main component</h1>
          {this.props.children}
        </div>
      );
  }
}

module.exports = Main;
