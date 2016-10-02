import React from 'react';
import MainImage from './main_image';
import Navigation from './navigation';

class Header extends React.Component {
  render () {
    return (
      <header>
        <MainImage />
        <Navigation />
      </header>
    );
  }
}

module.exports = Header;