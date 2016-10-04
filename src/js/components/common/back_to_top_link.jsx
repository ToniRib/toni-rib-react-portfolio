import React from 'react';
import Scroll from '../../scroll';

class BackToTopLink extends React.Component {
  render () {
    return (
      <div className='float-right'>
        <a id="back-to-top-link" onClick={Scroll.toTop}>
          <p className='back-to-top'>Back to top</p>
          <div className='arrow-up'></div>
        </a>
      </div>
    );
  }
}

module.exports = BackToTopLink;
