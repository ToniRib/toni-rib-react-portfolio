import React from 'react';
import MainImage from './main_image';
import Navigation from './navigation';

class Header extends React.Component {
  render () {
    return (
      <header>
        <div className="row">
          <MainImage />
        </div>
        <div className="row">
          <Navigation />
        </div>
      </header>
    );
  }
}

module.exports = Header;