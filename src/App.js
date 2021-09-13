import './App.css';
import {Switch, Route} from "react-router-dom"
import Home from './components/Home';
import Members from './components/Home/Members/Members';
import Customer from './pages/customer';
import Company from './pages/company';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Home members={Members}/>
        
        <Switch>
          <Route path="/customer/:id">
            <Customer />
          </Route>

          <Route path="/company/:id">
            <Company />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
