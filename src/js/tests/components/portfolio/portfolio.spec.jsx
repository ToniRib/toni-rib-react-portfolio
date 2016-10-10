import Portfolio from '../../../components/portfolio/portfolio';
import SectionTitle from '../../../components/common/section_title';
import BackToTopLink from '../../../components/common/back_to_top_link';

describe('<Portfolio />', () => {
  it('renders an article', () => {
    const wrapper = shallow(<Portfolio />);

    expect(wrapper).to.have.tagName('article');
  });

  it('includes a section title with the name Portfolio', () => {
    const wrapper = shallow(<Portfolio />);

    expect(wrapper).to.contain(<SectionTitle name='Portfolio' id='portfolio' location='right' />)
  });

  it('includes a link back to the top', () => {
    const wrapper = shallow(<Portfolio />);

    expect(wrapper).to.contain(<BackToTopLink />)
  });
});
