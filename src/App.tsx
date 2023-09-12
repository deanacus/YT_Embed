import './styles.css';
import { YoutubeEmbed } from './components';

export default function App() {
  return (
    <div className="App">
      <YoutubeEmbed
        width="560"
        height="315"
        id="90bkYh8vQzs"
        title="YouTube video player"
        poster="/poster.jpg"
      />
    </div>
  );
}
