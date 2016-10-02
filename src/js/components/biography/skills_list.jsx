import React from 'react';
import Skill from './skill';

const propTypes = {
  skills: React.PropTypes.array
};

const SkillsList = class extends React.Component {
  render () {
    return (
      <section className='row skills'>
        <ul>
          {
            this.props.skills.map((skill) => {
              return <Skill name={skill.name} key={skill.id} />;
            })
          }
        </ul>
      </section>
    );
  }
};

SkillsList.propTypes = propTypes;

module.exports = SkillsList;
