import Navigation from '../../../components/header/navigation';
import LinkToSection from '../../../components/header/link_to_section';
import Scroll from '../../../scroll';

describe('<Navigation/>', () => {
  it('renders a div', () => {
    const wrapper = shallow(<Navigation/>);

    expect(wrapper).to.have.tagName('div');
  });

  it('renders a link to the bio section', () => {
    const wrapper = shallow(<Navigation/>);

    expect(wrapper).to.contain(<LinkToSection name='Bio' id='bio-link' clickHandler={Scroll.toBio}/>);
  });


  it('renders a link to the portfolio section', () => {
    const wrapper = shallow(<Navigation/>);

    expect(wrapper).to.contain(<LinkToSection name='Portfolio' id='portfolio-link' clickHandler={Scroll.toPortfolio} />);
  });


  it('renders a link to the contact section', () => {
    const wrapper = shallow(<Navigation/>);

    expect(wrapper).to.contain(<LinkToSection name='Contact' id='contact-link' clickHandler={Scroll.toContact} />);
  });
});
