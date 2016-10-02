import Skill from '../../../components/biography/skill';

describe('<Skill/>', () => {
  it('renders a list element', () => {
    const wrapper = shallow(<Skill name='Ruby' />);

    expect(wrapper).to.have.tagName('li');
  });

  it('contains the name of the skill', () => {
    const wrapper = shallow(<Skill name='Ruby' />);

    expect(wrapper).to.have.text('Ruby');
  })
});
