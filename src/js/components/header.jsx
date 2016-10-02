import React from 'react';
import MainImage from './main_image';

class Header extends React.Component {
  render () {
    return (
      <header>
        <div className="row">
          <MainImage />
        </div>
      </header>
    );
  }
}

module.exports = Header;