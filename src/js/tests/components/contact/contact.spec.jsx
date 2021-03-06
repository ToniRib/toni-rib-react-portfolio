import Contact from '../../../components/contact/contact';
import SectionTitle from '../../../components/common/section_title';
import BackToTopLink from '../../../components/common/back_to_top_link';

describe('<Contact />', () => {
  it('renders an article', () => {
    const wrapper = shallow(<Contact />);

    expect(wrapper).to.have.tagName('article');
  });

  it('includes a section title with the name Contact', () => {
    const wrapper = shallow(<Contact />);

    expect(wrapper).to.contain(<SectionTitle name='Contact' id='contact' />)
  });

  it('includes a link back to the top', () => {
    const wrapper = shallow(<Contact />);

    expect(wrapper).to.contain(<BackToTopLink />)
  });
});
