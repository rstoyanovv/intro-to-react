import './App.css';
import Gallery from './Components/gallerySection/Gallery'; 
import { Header, Text } from './Components/Text';
import { EmptySpace } from './Components/EmptySpace';
import { Footer } from './Components/Footer';
import { Descriptions } from './Components/descriptionSection/Description';
import SentMessage from './Components/SentMessage';

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <EmptySpace height={50} />
      <Text />
      <Descriptions />
      <SentMessage />
      <Footer />
    </div>
  );
}

export default App;
