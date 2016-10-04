import React from 'react';

const propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  clickHandler: React.PropTypes.func.isRequired,
};

const LinkToSection = class extends React.Component {
  render () {
    return (
      <a id={this.props.id} onClick={this.props.clickHandler}>
        {this.props.name}
      </a>
    );
  }
};

LinkToSection.propTypes = propTypes;

module.exports = LinkToSection;
