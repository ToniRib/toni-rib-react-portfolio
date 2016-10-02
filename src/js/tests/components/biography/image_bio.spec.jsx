import ImageBio from '../../../components/biography/image_bio';

describe('<ImageBio />', () => {
  it('renders a div', () => {
    const wrapper = shallow(<ImageBio />);

    expect(wrapper).to.have.tagName('div');
  });

  it('renders the rocket image', () => {
    const wrapper = shallow(<ImageBio />);

    expect(wrapper.find('.rocket-img')).to.have.attr('src', './img/rocket.svg');
  });

  it('renders the coding logo image', () => {
    const wrapper = shallow(<ImageBio />);

    expect(wrapper.find('.coding-img')).to.have.attr('src', './img/coding-logo.svg');
  });
});
