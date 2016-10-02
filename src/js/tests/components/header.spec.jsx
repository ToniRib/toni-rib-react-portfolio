import Header from '../../components/header';
import MainImage from '../../components/main_image';

describe('<Header/>', () => {
  it('should render a header', () => {
    const wrapper = shallow(<Header/>);

    expect(wrapper).to.have.tagName('header');
  });

  it('should render the MainImage component', () => {
    const wrapper = shallow(<Header/>);

    expect(wrapper).to.contain(<MainImage/>)
  });
});