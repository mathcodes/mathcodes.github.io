
import {Card} from './components/Card';
import {Header} from './components/Header';
import MediumFeed from './components/MediumFeed';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Card />
      <MediumFeed />
      <Test />
      {/* <Test2 /> */}
    </div>
  );
}

export default App;
