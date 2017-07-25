const React = require('react');
const Navigation = require('Navigation');

class Main extends React.Component{
  render() {
      return (
        <div>
          <Navigation/>
          <div className="row">
            <div className="columns medium-5 large-6 small-centered">
              {this.props.children}
            </div>
          </div>
        </div>
      );
  }
}

module.exports = Main;
