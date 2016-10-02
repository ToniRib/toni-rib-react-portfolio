import Navigation from '../../components/navigation';

describe('<Navigation/>', () => {
  it('renders a nav', () => {
    const wrapper = shallow(<Navigation/>);

    expect(wrapper).to.have.tagName('nav');
  });

  it('renders a link to the bio section', () => {
    const wrapper = shallow(<Navigation/>);

    expect(wrapper.find('#bio-link')).to.have.attr('href', '#bio-title');
  });


  it('renders a link to the portfolio section', () => {
    const wrapper = shallow(<Navigation/>);

    expect(wrapper.find('#portfolio-link')).to.have.attr('href', '#portfolio-title');
  });


  it('renders a link to the contact section', () => {
    const wrapper = shallow(<Navigation/>);

    expect(wrapper.find('#contact-link')).to.have.attr('href', '#contact-title');
  });
});