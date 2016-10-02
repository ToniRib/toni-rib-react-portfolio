import Header from '../../components/header';

describe('<Header/>', () => {
  it('should render a header', () => {
    const wrapper = shallow(<Header/>);

    expect(wrapper).to.have.tagName('header');
  });
});