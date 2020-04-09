import React, { Component } from 'react';
import navItems from './data/navData';
import NavItem from './NavItem';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
         {/* <video id="video_background" preload="auto" autoplay="true" loop="loop" muted volume="0">
                        <source src="https://player.vimeo.com/video/245391977" type="video/webm"/>
                        <source src="https://player.vimeo.com/video/245391977" type="video/ogg ogv" codecs="theora, vorbis"/>
                        <source src="https://player.vimeo.com/video/245391977" type="video/mp4"/>
                </video>  */}
                 <iframe id="video_background" src="https://player.vimeo.com/video/245391977?autoplay=1&loop=1&volume=0" preload="auto" muted volume="0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> 
        <nav className="nav">
          <div className="nav-logo-wrap">
            <img src="https://i.imgur.com/rTLOgiz.png" className="logo"></img>
          </div>
          <ul className="nav-list">
            {navItems.map((navItem, idx) =>
              <NavItem
                key={ idx }
                label={ navItem.label }
                link={ navItem.url }
              />
            )}
          </ul>
        </nav>
        <div className="hero-content">
          <h1 className="hero-content-title">Experience our Viet Nam</h1>
        </div>
      </div>
    )
  }
}

export default Header;