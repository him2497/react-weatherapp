const React = require('react');
const {Link, NavLink} = require('react-router-dom');

class Examples extends React.Component{
  render(){
    return(
      <div>
        <h1 className="text-center page-title">Examples!</h1>
        <p>Here are few locations to try out:</p>
        <ol>
          <li>
            <NavLink to='/?location=London'>London</NavLink>
          </li>
          <li>
            <NavLink to='/?location=San Francisco'>San Francisco</NavLink>
          </li>
        </ol>
      </div>
    );
  }
}

module.exports = Examples;
