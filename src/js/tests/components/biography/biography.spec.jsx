import Biography from '../../../components/biography/biography';
import ImageBio from '../../../components/biography/image_bio';
import Description from '../../../components/biography/description';
import SkillsList from '../../../components/biography/skills_list';
import skills from '../../../skills';
import SectionTitle from '../../../components/common/section_title';
import BackToTopLink from '../../../components/common/back_to_top_link';

describe('<Biography />', () => {
  it('renders an article', () => {
    const wrapper = shallow(<Biography />);

    expect(wrapper).to.have.tagName('article');
  });

  it('contains a SectionTitle', () => {
    const wrapper = shallow(<Biography />);

    expect(wrapper).to.contain(<SectionTitle name='Biography' id='bio'/>);
  });

  it('contains the ImageBio', () => {
    const wrapper = shallow(<Biography />);

    expect(wrapper).to.contain(<ImageBio />);
  });

  it('contains the Description', () => {
    const wrapper = shallow(<Biography />);

    expect(wrapper).to.contain(<Description />);
  });

  it('contains the BackToTopLink', () => {
    const wrapper = shallow(<Biography />);

    expect(wrapper).to.contain(<BackToTopLink />);
  });

  it('contains the SkillsList', () => {
    const wrapper = shallow(<Biography />);

    expect(wrapper).to.contain(<SkillsList skills={skills} />);
  });
});
