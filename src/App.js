import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import './App.css';
import rootReducer from '../src/reducers/index';
import Home from '../src/components/Home';
import OrderTab from '../src/components/OrderTab';
import RestaurantPage from '../src/components/RestaurantPage';
import Dining from '../src/components/Dining';

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/delivery/:restaurant" component={RestaurantPage} />
            <Route path="/delivery" component={OrderTab} />
            <Route path="/dinein" component={Dining} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
