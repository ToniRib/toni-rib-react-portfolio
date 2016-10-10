import Project from '../../../components/portfolio/project';

describe('<Project />', () => {
  let props = {
    id: 'project',
    name: 'Test Project',
    image: '/img/test.jpg',
    alt: 'test image'
  };

  it('renders a div', () => {
    const wrapper = shallow(<Project {...props} />);

    expect(wrapper).to.have.tagName('div');
  });

  it('includes a div with the given id', () => {
    const wrapper = shallow(<Project {...props} />);

    expect(wrapper.find('#project')).to.have.className('box');
  })

  it('includes a div with the given project name', () => {
    const wrapper = shallow(<Project {...props} />);

    expect(wrapper.find('.portfolio-text')).to.have.text(props.name);
  });

  it('includes the given image', () => {
    const wrapper = shallow(<Project {...props} />);

    expect(wrapper.find('img')).to.have.attr('src', props.image);
  });

  it('adds the alt text to the image', () => {
    const wrapper = shallow(<Project {...props} />);

    expect(wrapper.find('img')).to.have.attr('alt', props.alt);
  });
});
