import BackToTopLink from '../../../components/links/back_to_top_link';

describe('<BackToTopLink/>', () => {
  it('renders a div', () => {
    const wrapper = shallow(<BackToTopLink/>);

    expect(wrapper).to.have.tagName('div');
  });

//  TODO: Test the scroll functionality here
});