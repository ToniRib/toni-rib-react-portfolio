import React from 'react';
import BackToTopLink from '../common/back_to_top_link';
import SectionTitle from '../common/section_title';
import Project from './project';

class Portfolio extends React.Component {
  render () {
    return (
      <article className='row'>
        <SectionTitle name='Portfolio' id='portfolio' location='right'/>
        <div className='row portfolio-row'>
          <Project id='runhacker' name='runHacker' image='./img/run-hacker.svg' alt='Column Chart' />
          <Project id='freelancer' name='Freelancer' image='./img/freelancer.svg' alt='Wrench' />
          <Project id='sha1' name='SHA-1 Algorithm' image='./img/sha1-algorithm.svg' alt='Pound Sign' />
        </div>
        <BackToTopLink />
      </article>
    );
  }
}

module.exports = Portfolio;
