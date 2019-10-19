import React, { Component } from "react";
import './styles.scss';

class Footer extends Component {
  render(){
    const d = new Date();
    const n = d.getFullYear();
    return (
      <footer className='footer'>
        {`Thank you for visiting Avid Research where we like to ask all the questions and occasionally even answer them.
        Feel free to reference any of the images here (please link people back to this site!) and contact us if you would like your very own commission.
        Copyright ${n}`}
      </footer>
    );
  }
}
export default Footer;
