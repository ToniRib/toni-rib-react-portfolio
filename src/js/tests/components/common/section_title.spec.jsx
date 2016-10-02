import SectionTitle from '../../../components/common/section_title';

describe('<SectionTitle />', () => {
  it('renders an h2 tag', () => {
    const wrapper = shallow(<SectionTitle name='Biography' id='bio' />);

    expect(wrapper).to.have.tagName('h2');
  });

  it('appends -title to the id', () => {
    const wrapper = shallow(<SectionTitle name='Biography' id='bio' />);

    expect(wrapper).to.have.attr('id', 'bio-title');
  });

  it('appends -title to the default location and sets it as the className', () => {
    const wrapper = shallow(<SectionTitle name='Biography' id='bio' />);

    expect(wrapper).to.have.className('left-title');
  });

  it('can take a different location', () => {
    const wrapper = shallow(<SectionTitle name='Biography' id='bio' location='right' />);

    expect(wrapper).to.have.className('right-title');
  });

  it('contains the name as the text', () => {
    const wrapper = shallow(<SectionTitle name='Biography' id='bio' />);

    expect(wrapper).to.have.text('Biography');
  });
});
