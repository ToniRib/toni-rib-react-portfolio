import React from 'react';
import Link from './link';

const propTypes = {
  links: React.PropTypes.array
};

const LinksList = class extends React.Component {
  render () {
    return (
      <ul>
        {
          this.props.links.map((link) => {
            return <Link name={link.name} key={link.id} href={link.href} type={link.type} />;
          })
        }
      </ul>
    );
  }
};

LinksList.propTypes = propTypes;

module.exports = LinksList;
