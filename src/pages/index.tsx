import { AboutMe } from '../components/AboutMe';
import { Banner } from '../components/Banner';
// import { CardSkills } from '../components/CardsSkills/CardsSills';
import { Menu } from '../components/Menu';
import { Skills } from '../components/Skills/Skills';
// import logo from '../../public/html.png';

export default function Home() {
  return (
    <>
      <Menu />
      <Banner />
      <AboutMe />
      <Skills />
    </>
  );
}
