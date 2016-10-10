import Link from '../../../components/contact/link';

describe('<Link />', () => {
  let props = {
    iconName: 'twitter',
    link: 'http://www.twitter.com',
    name: 'exampleaccount'
  };

  it('renders a list element', () => {
    const wrapper = shallow(<Link {...props} />);

    expect(wrapper).to.have.tagName('li');
  });

  it('contains a link with the correct class name', () => {
    const wrapper = shallow(<Link {...props} />);

    expect(wrapper.find('a')).to.have.className('zocial-twitter');
  });

  it('links to the provided location', () => {
    const wrapper = shallow(<Link {...props} />);

    expect(wrapper.find('a')).to.have.attr('href', props.link);
  });

  it('contains the name as the text', () => {
    const wrapper = shallow(<Link {...props} />);

    expect(wrapper.find('a')).to.have.text(props.name);
  });
});
