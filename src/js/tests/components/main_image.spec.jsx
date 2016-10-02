import MainImage from '../../components/main_image';

describe('<MainImage/>', () => {
  it('renders an div', () => {
    const wrapper = shallow(<MainImage/>);

    expect(wrapper).to.have.tagName('div');
  });

  it('renders the correct image source', () => {
    const wrapper = shallow(<MainImage/>);

    expect(wrapper.find('img')).to.have.attr('src', './img/toni_rib_header_v2.svg');
  })
});