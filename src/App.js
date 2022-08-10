import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./styles/App.scss";
import NavBar from "./components/pages/NavBar";
import NameFormatter from "./components/pages/NameFormatter";
import BGToggle from "./components/pages/BGToggle";
import LeapYear from "./components/pages/LeapYear";
import Pokemon from "./components/pages/Pokemon";
import EightBall from "./components/pages/EightBall";
import ReverseString from "./components/pages/ReverseString";
import FizzBuzz from "./components/pages/FizzBuzz";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="*" component={NavBar} />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div className="home-page">
                <div className="home-title">home is where you make it</div>
              </div>
            )}
          />
          <Route path="/1" component={NameFormatter} />
          <Route path="/2" component={BGToggle} />
          <Route path="/3" component={LeapYear} />
          <Route path="/4" component={Pokemon} />
          <Route path="/5" component={EightBall} />
          <Route path="/6" component={ReverseString} />
          <Route path="/7" component={FizzBuzz} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
