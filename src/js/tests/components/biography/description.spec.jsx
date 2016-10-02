import Description from '../../../components/biography/description';

describe('<Description />', () => {
  it('renders a div', () => {
    const wrapper = shallow(<Description />);

    expect(wrapper).to.have.tagName('div');
  });
});
