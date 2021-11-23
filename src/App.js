import './App.css';
import { Route ,Switch} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
