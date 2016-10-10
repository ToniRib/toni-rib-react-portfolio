import React from 'react';
import BackToTopLink from '../common/back_to_top_link';
import Description from './description';
import SectionTitle from '../common/section_title';
import LinksList from './links_list';
import contactLinks from '../../contact_links';

class Contact extends React.Component {
  render () {
    return (
      <article className='row contacts'>
        <SectionTitle name='Contact' id='contact'/>
        <Description />
        <LinksList links={contactLinks} />
        <BackToTopLink />
      </article>
    );
  }
}

module.exports = Contact;
