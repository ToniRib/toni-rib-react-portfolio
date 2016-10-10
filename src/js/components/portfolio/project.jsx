import React from 'react';

const propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string
};

const defaultProps = {
  alt: 'project image'
};

const Project = class extends React.Component {
  render () {
    return (
      <div className='col-md-4 col-sm-4 col-xs-12 text-center'>
        <a>
          <div className='box' id={this.props.id}>
            <div className='portfolio-text'>{this.props.name}</div>
            <img className='portfolio-image' src={this.props.image} alt={this.props.alt} />
          </div>
        </a>
      </div>
    );
  }
};

Project.propTypes = propTypes;
Project.defaultProps = defaultProps;

module.exports = Project;
