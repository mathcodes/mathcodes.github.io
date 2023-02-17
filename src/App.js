import Listing from './components/Listing/Listing';
import SearchPage from './components/SearchPage/SearchPage';
import Test from './components/Test/Test';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Test2 from './components/Test/Test2';
import Input from './components/Input/Input';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Listing /> */}
      {/* <SearchPage /> */}
      <Header/>
      <Card />
      <Input />
      <Test />
      {/* <Test2 /> */}
    </div>
  );
}

export default App;
