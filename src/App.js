import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import { HashRouter } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
