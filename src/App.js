import { Switch, Route} from 'react-router-dom';
import Login from './pages/login';
import Admin from './pages/admin';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/admin" component={Admin}></Route>
      </Switch>
    </div>
  );
}

export default App;