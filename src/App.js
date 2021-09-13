import logo from './logo.svg';
import './App.css';
import AAA from './component/AAA';
import BBB from './component/BBB';
import Test from './Test';
import { Route, Switch } from "react-router-dom";
import A from './component/A';
import B from './component/B';
import C from './component/C';


function App() {
  return (
    <div className="App">
      <AAA/>
      <BBB/>
      <Test/>
      <Switch>
        <Route exact path="/A" component={A}/>
        <Route exact path="/B" component={B}/>
        <Route exact path="/C" component={C}/>

      </Switch>

    </div>
  );
}

export default App;
