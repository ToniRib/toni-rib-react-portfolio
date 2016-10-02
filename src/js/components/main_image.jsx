import React from 'react';

class MainImage extends React.Component {
  render () {
    return (
      <img src='./img/toni_rib_header_v2.svg'
           className ='img-responsive center-block main-img'
           alt='toni rib main logo'
      />
    );
  }
}

module.exports = MainImage;