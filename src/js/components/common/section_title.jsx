import React from 'react';

const propTypes = {
  name: React.PropTypes.string.isRequired,
  location: React.PropTypes.string,
  id: React.PropTypes.string.isRequired
};

const defaultProps = {
  location: 'left'
};

const SectionTitle = class extends React.Component {
  render () {
    return (
      <h2 id={this.props.id + '-title'} className={this.props.location + '-title'}>
        {this.props.name}
      </h2>
    );
  }
};

SectionTitle.propTypes = propTypes;
SectionTitle.defaultProps = defaultProps;

module.exports = SectionTitle;
