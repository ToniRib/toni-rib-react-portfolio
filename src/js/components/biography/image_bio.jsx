import React from 'react';

class ImageBio extends React.Component {
  render () {
    return (
      <div>
        <div className='col-md-3 col-sm-4 col-xs-4'>
          <img className='img-responsive rocket-img'
               src='./img/rocket.svg'
               alt='rocket'
          />
          <h4>astronautical engineer</h4>
        </div>
        <div className='col-md-2 col-sm-4 col-xs-4 center'>
          <div className='right-arrow'></div>
          <div className='turned-text'><em>turned</em></div>
        </div>
        <div className='col-md-3 col-sm-4 col-xs-4'>
          <img className='img-responsive coding-img'
               src='./img/coding-logo.svg'
               alt='html brackets logo'
          />
          <h4>web developer</h4>
        </div>
      </div>
    );
  }
}

module.exports = ImageBio;
