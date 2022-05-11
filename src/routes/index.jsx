import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import InstructorDashboard from "../pages/InstructorDashboard";
import UserDashboard from "../pages/UserDashboard";
import RedFlagAsks from "../pages/RedFlagAsks";
import AnsweredAsks from "../pages/AnsweredAsks";
// import Route from './Route'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/dashboard">
        <UserDashboard />
      </Route>
      <Route path="/demoAdm">
        <InstructorDashboard />
      </Route>
      <Route path="/redFlagAsks">
        <RedFlagAsks />
      </Route>
      <Route path="/answeredAsks">
        <AnsweredAsks />
      </Route>
    </Switch>
  );
  {
    /*
    return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={UserDashboard} />
      <Route path="/demoAdm" component={InstructorDashboard} />
      <Route path="/redFlagAsks" component={RedFlagAsks} />
      <Route path="/answeredAsks" component={AnsweredAsks} />
    </Switch>
  );
*/
  }
}
