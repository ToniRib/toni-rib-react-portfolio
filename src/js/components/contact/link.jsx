import React from 'react';

const propTypes = {
  type: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired
};

const Link = class extends React.Component {
  render () {
    const classes = 'zocial-' + this.props.type + ' contact-link';

    return (
      <li>
        <a className={classes}
           href={this.props.href}>
          {this.props.name}
        </a>
      </li>
    );
  }
};

Link.propTypes = propTypes;

module.exports = Link;
