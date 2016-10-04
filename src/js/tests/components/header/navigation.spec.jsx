import Navigation from '../../../components/header/navigation';

describe('<Navigation/>', () => {
  it('renders a div', () => {
    const wrapper = shallow(<Navigation/>);

    expect(wrapper).to.have.tagName('div');
  });
});
