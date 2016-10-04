import BackToTopLink from '../../../components/common/back_to_top_link';

describe('<BackToTopLink />', () => {
  it('renders a div', () => {
    const wrapper = shallow(<BackToTopLink />);

    expect(wrapper).to.have.tagName('div');
  });
});
