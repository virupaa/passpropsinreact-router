import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./styles.css";

const Home = () => <h2>Home Page</h2>;
const PropsPage = ({ title }) => <h2>{title}</h2>;
const App = () => (
  <div className="App">
    <Router>
      <nav>
        <Link to="/">Home Page</Link> | <Link to="/props">Props Page</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route
          path="/props"
          render={() => <PropsPage title="Props Page" />}
        ></Route>
      </Switch>
    </Router>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
