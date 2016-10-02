import Header from '../../../components/header/header';
import MainImage from '../../../components/header/main_image';
import Navigation from '../../../components/header/navigation';

describe('<Header/>', () => {
  it('should render a header', () => {
    const wrapper = shallow(<Header/>);

    expect(wrapper).to.have.tagName('header');
  });

  it('should render the MainImage component', () => {
    const wrapper = shallow(<Header/>);

    expect(wrapper).to.contain(<MainImage/>)
  });

  it('should render the Navigation component', () => {
    const wrapper = shallow(<Header/>);

    expect(wrapper).to.contain(<Navigation/>)
  });
});