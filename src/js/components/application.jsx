import React from 'react';
import Biography from './biography/biography';
import Contact from './contact/contact';
import Header from './header/header';
import Portfolio from './portfolio/portfolio';

class Application extends React.Component {
  render () {
    return (
      <div className="container">
        <Header />
        <Biography />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

module.exports = Application;
