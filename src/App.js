import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

const App = () => {
  return (
    // <BrowserRouter>
    // <HashRouter>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    // </HashRouter>
    // </BrowserRouter>
  );
}

export default App;
