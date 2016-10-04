import React from 'react';
import LinkToSection from './link_to_section';
import Scroll from '../../scroll';

class Navigation extends React.Component {
  render () {
    return (
      <div className='row'>
        <nav>
          <LinkToSection name='Bio' id='bio-link' clickHandler={Scroll.toBio} />
          <LinkToSection name='Portfolio' id='portfolio-link' clickHandler={Scroll.toPortfolio} />
          <LinkToSection name='Contact' id='contact-link' clickHandler={Scroll.toContact} />
        </nav>
      </div>
    );
  }
}

module.exports = Navigation;
