import React from 'react';
import Biography from './biography/biography';
import Header from './header/header';

class Application extends React.Component {
  render () {
    return (
      <div className="container">
        <Header />
        <Biography />
      </div>
    );
  }
}

module.exports = Application;
