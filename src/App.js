import './App.css';
import Home from '../src/components/Home';
import OrderTab from '../src/components/OrderTab';
import Dining from '../src/components/Dining';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/delivery" component={OrderTab} />
          <Route path="/dinein" component={Dining} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
