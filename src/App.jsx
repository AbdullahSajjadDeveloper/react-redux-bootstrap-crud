import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Students from "./Components/Students";
import InsertStudent from "./Components/InsertStudent";
import EditStudent from "./Components/EditStudent";
import About from "./Components/About";


const App = () => {
  return (
    <Fragment>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Students} />
          <Route exact path="/insert" component={InsertStudent} />
          <Route exact path="/edit" component={EditStudent} />
          <Route exact path="/about-abdullah-sajjad" component={About} />
          <Redirect exact to="/" />
        </Switch>
      </div>
    </Fragment>
  );
};

export default App;
