import './App.css';
import Gallery from './Components/Gallery'; 
import { Header, Text } from './Components/Text';
import { EmptySpace } from './Components/EmptySpace';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <EmptySpace height={50} />
      <Text />
      <Footer />
    </div>
  );
}

export default App;
