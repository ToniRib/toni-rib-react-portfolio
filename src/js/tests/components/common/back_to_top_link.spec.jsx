import BackToTopLink from '../../../components/common/back_to_top_link';

describe('<BackToTopLink/>', () => {
  it('renders a div', () => {
    const wrapper = shallow(<BackToTopLink/>);

    expect(wrapper).to.have.tagName('div');
  });

  it('scrolls to the top of the page', () => {
    const wrapper = shallow(<BackToTopLink/>);
    const wrapperInstance = wrapper.instance();
    const handleClickStub = stub(wrapperInstance, '_scrollToTop');

    wrapperInstance.forceUpdate();
    wrapper.update();

    wrapper.find('#back-to-top-link').simulate('click');

    expect(handleClickStub).to.have.been.called;
  });
});
