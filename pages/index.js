import { Introduction } from '../components/Introduction';
import { Work } from '../components/Work';
import { Projects } from '../components/Projects';
import { Technologies } from '../components/Technologies';

export default function Home() {
  return (
    <div>
      <Introduction />
      <Work />
      <Projects />
      <Technologies />
    </div>
  );
}