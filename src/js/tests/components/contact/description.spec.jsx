import Description from '../../../components/contact/description';

describe('<Description />', () => {
  it('renders a paragraph', () => {
    const wrapper = shallow(<Description />);

    expect(wrapper).to.have.tagName('p');
  });
});
