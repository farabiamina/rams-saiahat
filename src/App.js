import './App.css';
import Advantages from './components/advantages/Advantages';
import AllInOne from './components/all-in-one/AllInOne';
import Banner from './components/banner/Banner';
import Location from './components/location/Location';
import Purchase from './components/purchase/Purchase';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Advantages/>
      <Location/>
      <AllInOne/>
      <Purchase/>
    </div>
  );
}

export default App;
