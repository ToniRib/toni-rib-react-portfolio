import LinkToSection from '../../../components/header/link_to_section';

describe('<LinkToSection />', () => {
  let props = {
    id: 'bio',
    name: 'Bio',
    clickHandler: spy()
  };

  it('renders a link', () => {
    const wrapper = shallow(<LinkToSection {...props}/>);

    expect(wrapper).to.have.tagName('a');
  });

  it('has the correct text', () => {
    const wrapper = shallow(<LinkToSection {...props}/>);

    expect(wrapper).to.have.text(props.name);
  });

  it('has the correct id', () => {
    const wrapper = shallow(<LinkToSection {...props}/>);

    expect(wrapper).to.have.attr('id', props.id);
  });

  it('calls the clickHandler when clicked', () => {
    const wrapper = mount(<LinkToSection {...props}/>);

    wrapper.find('a').simulate('click');

    expect(props.clickHandler).to.have.been.called;
  });
});
