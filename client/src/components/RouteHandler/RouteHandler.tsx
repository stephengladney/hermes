import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom"

import { Login } from "../Login/Login"
import { Dashboard } from "../Dashboard/Dashboard"

export interface RouteHandlerProps {
  isLoggedIn: boolean
}

export function RouteHandler({ isLoggedIn }: RouteHandlerProps) {
  return (
    <Router>
      {!isLoggedIn && (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      )}
      {isLoggedIn && (
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/">
            <Redirect to="/dashboard" />
          </Route>
        </Switch>
      )}
    </Router>
  )
}
