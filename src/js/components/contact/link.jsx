import React from 'react';

const propTypes = {
  iconName: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired
};

const Link = class extends React.Component {
  render () {
    const classes = 'zocial-' + this.props.iconName + ' contact-link';

    return (
      <li>
        <a className={classes}
           href={this.props.link}>
          {this.props.name}
        </a>
      </li>
    );
  }
};

Link.propTypes = propTypes;

module.exports = Link;
