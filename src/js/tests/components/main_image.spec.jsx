import MainImage from '../../components/main_image';

describe('<MainImage/>', () => {
  it('renders an image', () => {
    const wrapper = shallow(<MainImage/>);

    expect(wrapper).to.have.tagName('img');
  });

  it('renders the correct image source', () => {
    const wrapper = shallow(<MainImage/>);

    expect(wrapper).to.have.attr('src', './img/toni_rib_header_v2.svg');
  })
});