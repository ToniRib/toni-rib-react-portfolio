import SkillsList from '../../../components/biography/skills_list';
import Skill from '../../../components/biography/skill';

describe('<SkillsList/>', () => {
  let skills;

  beforeEach(() => {
    skills = [
      {
        name: 'HTML5',
        id: 1
      },
      {
        name: 'CSS3',
        id: 2
      }
    ];
  });

  it('renders a section', () => {
    const wrapper = shallow(<SkillsList skills={skills} />);

    expect(wrapper).to.have.tagName('section');
  });

  it('renders a list of skills', () => {
    const wrapper = shallow(<SkillsList skills={skills} />);

    expect(wrapper.find('ul')).to.contain(<Skill name={skills[0].name} />);
    expect(wrapper.find('ul')).to.contain(<Skill name={skills[1].name} />);
  });
});
