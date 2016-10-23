import Application from '../../components/application';
import Header from '../../components/header/header';
import Biography from '../../components/biography/biography';
import Portfolio from '../../components/portfolio/portfolio';
import Contact from '../../components/contact/contact';

describe('<Application />', () => {
  it('renders a div', () => {
    const wrapper = shallow(<Application />);

    expect(wrapper).to.have.tagName('div');
  });

  it('wraps everything in a container', () => {
    const wrapper = shallow(<Application />);

    expect(wrapper).to.have.className('container');
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<Application />);

    expect(wrapper).to.contain(<Header />);
  });

  it('contains the Biography component', () => {
    const wrapper = shallow(<Application />);

    expect(wrapper).to.contain(<Biography />);
  });

  it('contains the Portfolio component', () => {
    const wrapper = shallow(<Application />);

    expect(wrapper).to.contain(<Portfolio />);
  });

  it('contains the Contact component', () => {
    const wrapper = shallow(<Application />);

    expect(wrapper).to.contain(<Contact />);
  });
});
