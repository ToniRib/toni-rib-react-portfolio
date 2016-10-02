import React from 'react';
import Scroll from 'react-scroll';

const scroll = Scroll.animateScroll;

class BackToTopLink extends React.Component {
  scrollToTop () {
    scroll.scrollToTop({
      duration: 1000,
      smooth: true
    });
  }

  render () {
    return (
      <div className='float-right'>
        <a onClick={this.scrollToTop.bind(this)}>
          <p className='back-to-top'>Back to top</p>
          <div className='arrow-up'></div>
        </a>
      </div>
    );
  }
}

module.exports = BackToTopLink;