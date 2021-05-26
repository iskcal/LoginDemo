import Home from './components/Home';
import Callback from './components/Callback';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signin-oidc' component={Callback} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
