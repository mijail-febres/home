import './App.css';
import { Route ,Switch} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Publications from './Pages/Publications/Publications';
import About from './Pages/About/About';
import Layout from './Pages/Layout/Layout';
import Vortices from './Components/Vortices/Vortices';
import FrontTracking from './Components/FrontTracking/FrontTracking';

const App = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/"> <Home/> </Route>
          <Route exact path="/publications"> <Publications/> </Route>
          <Route exact path="/publications/vortices"> <Vortices/> </Route>
          <Route exact path="/publications/front-tracking"> <FrontTracking/> </Route>
          <Route exact path="/about"> <About/> </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
