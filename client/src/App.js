import Home from './components/Home';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signin-oidc' component={SignIn} />
          <Route path='/signout-oidc' component={SignOut} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
