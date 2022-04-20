import './App.css';
import Account from './Screens/Account';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Screens/Dashboard';


function App() {
  return (
    <Router forceRefresh={true}>
      <div className="App">
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/account' exact component={Account} />
            <Route path='/signup' exact component={Signup} />
            <Route path='/dashboard' exact component={Dashboard} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
