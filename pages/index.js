import { Introduction } from '../components/Introduction';
import { Projects } from '../components/Projects';
import { Technologies } from '../components/Technologies';

export default function Home() {
  return (
    <div>
      <Introduction />
      <Projects />
      <Technologies />
    </div>
  );
}