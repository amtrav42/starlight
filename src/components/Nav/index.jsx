import React, { Component } from "react";
import NavLink from "../NavLink";

const navLinkList = [
  {
    href: "gallery",
    label: "Gallery"
  },
  {
    href: "mapGenerator",
    label: "Map Generator"
  },
  {
    href: "about",
    label: "About"
  },
  {
    href: "contact",
    label: "Contact"
  },
  {
    href: "https://www.redbubble.com/people/amaltr42?asc=u",
    label: "Shop"
  }
];

class Nav extends Component {
  render(){
    return (
      <nav>
        {navLinkList.map(
          function (currentLink, i){
            return <NavLink key={`navLink${i}`} href={currentLink.href} label={currentLink.label} />
          }
        )}
      </nav>
    );
  }
}
export default Nav;
