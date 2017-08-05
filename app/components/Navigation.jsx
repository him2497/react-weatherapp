const React = require('react');
const {Link, NavLink, withRouter} = require('react-router-dom');


class Navigation extends React.Component {

constructor(props){
  super(props);
  this.onSearch = this.onSearch.bind(this);
}
  onSearch(e){
    e.preventDefault();
       const location = this.refs.search.value;
       if (location.length > 0) {
           this.props.history.push('/?location=' + location);
           this.refs.search.value = '';
       }
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather Application</li>
            <li>
              <NavLink exact to="/" activeClassName="active" activeStyle={{
                fontWeight: 'bold'
              }}>Get Weather</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active" activeStyle={{
                fontWeight: 'bold'
              }}>About</NavLink>
            </li>
            <li>
              <NavLink to="/examples" activeClassName="active" activeStyle={{
                fontWeight: 'bold'
              }}>Examples</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather" ref="search"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather by city"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

module.exports = withRouter(Navigation);
