import './App.css';
import { Route ,Switch} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/"> <Home/> </Route>
        <Route exact path="/about"> <About/> </Route>
      </Switch>
    </>
  );
}

export default App;
