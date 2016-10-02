import React from 'react';
import BackToTopLink from '../common/back_to_top_link';
import ImageBio from './image_bio';
import Description from './description';
import SkillsList from './skills_list';
import SectionTitle from '../common/section_title';
import skills from '../../skills';

const Biography = class extends React.Component {
  render () {
    return (
      <article className='row'>
        <SectionTitle name='Biography' id='bio'/>
        <div className='row'>
          <ImageBio />
          <Description />
        </div>
        <SkillsList skills={skills} />
        <BackToTopLink />
      </article>
    );
  }
};

module.exports = Biography;
