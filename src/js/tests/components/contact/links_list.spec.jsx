import LinksList from '../../../components/contact/links_list';
import Link from '../../../components/contact/link';

describe('<LinksList />', () => {
  let links = [
    {
      id: 1,
      type: 'twitter',
      href: 'www.twitter.com',
      name: 'test-twitter'
    },
    {
      id: 2,
      type: 'facebook',
      href: 'www.facebook.com',
      name: 'test-facebook'
    }
  ];

  it('renders an unordered list', () => {
    const wrapper = shallow(<LinksList links={links} />);

    expect(wrapper).to.have.tagName('ul');
  });

  it('renders a list of Link components', () => {
    const wrapper = shallow(<LinksList links={links} />);

    expect(wrapper).to.contain(
      <Link name={links[0].name}
            href={links[0].href}
            type={links[0].type} />
    )
    expect(wrapper).to.contain(
      <Link name={links[1].name}
            href={links[1].href}
            type={links[1].type} />
    )
  });
});
