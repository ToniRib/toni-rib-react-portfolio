import React from 'react';

const propTypes = {
  name: React.PropTypes.string.isRequired
};

const Skill = class extends React.Component {
  render () {
    return (
      <li>{this.props.name}</li>
    );
  }
};

Skill.propTypes = propTypes;

module.exports = Skill;
