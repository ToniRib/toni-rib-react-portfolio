import React from 'react';
import Header from './header/header';

class Application extends React.Component {
  render () {
    return (
      <div className="container">
        <Header />
      </div>
    );
  }
}

module.exports = Application;
