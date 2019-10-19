import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavLink extends Component {
  render(){
    const { href, label } = this.props;
    return (
      <Link to={href}>
        <div>
          {label}
        </div>
      </Link>
    );
  }
}
export default NavLink;
