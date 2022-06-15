import { AboutMe } from '../components/AboutMe';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Skills } from '../components/Skills';

export default function Home() {
  return (
    <main>
      <Menu />
      <Banner />
      <AboutMe />
      <Skills />
    </main>
  );
}
