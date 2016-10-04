import React from 'react';
import Scroll from '../../scroll';

class Navigation extends React.Component {
  render () {
    return (
      <div className="row">
        <nav>
          <a id='bio-link' onClick={Scroll.toBio}>Bio</a>
          <a id='portfolio-link' onClick={Scroll.toPortfolio}>Portfolio</a>
          <a id='contact-link' onClick={Scroll.toContact}>Contact</a>
        </nav>
      </div>
    );
  }
}

module.exports = Navigation;
