const React = require('react');
const {Link, NavLink} = require('react-router-dom');

class Navigation extends React.Component{
  render() {
    return (
      <div>
        <h2>Navigation Component</h2>
        <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink>
        <NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
        <NavLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
      </div>
    )
  }
}

module.exports = Navigation;
