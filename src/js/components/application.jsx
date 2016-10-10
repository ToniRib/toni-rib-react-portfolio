import React from 'react';
import Biography from './biography/biography';
import Header from './header/header';
import Portfolio from './portfolio/portfolio';

class Application extends React.Component {
  render () {
    return (
      <div className="container">
        <Header />
        <Biography />
        <Portfolio />s
      </div>
    );
  }
}

module.exports = Application;
