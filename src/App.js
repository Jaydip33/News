import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Business from './Components/Business';
import Sports from './Components/Sports';
import World from './Components/World';
import Politics from './Components/Politics';
import Technology from './Components/Technology';
import Startup from './Components/Startup';
import Entertainment from './Components/Entertainment';
import Miscellaneous from './Components/Miscellaneous';
import Science from './Components/Science';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/world" element={<World />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/startup" element={<Startup />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/miscellaneous" element={<Miscellaneous />} />
          <Route path="/science" element={<Science />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
