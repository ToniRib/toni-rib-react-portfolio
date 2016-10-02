import React from 'react';

class Navigation extends React.Component {
  render () {
    return (
      <nav>
        <a id='bio-link' href='#bio-title'>Bio</a>
        <a id='portfolio-link' href='#portfolio-title'>Portfolio</a>
        <a id='contact-link' href='#contact-title'>Contact</a>
      </nav>
    );
  }
}

module.exports = Navigation;