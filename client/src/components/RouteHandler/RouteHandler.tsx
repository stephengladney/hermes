import React, { useContext } from "react"
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom"

import { authContext } from "../../contexts/authContext"
import { Login } from "../Login/Login"
import { AuthSuccess } from "../Auth/AuthSuccess"
import { Dashboard } from "../Dashboard/Dashboard"

export interface RouteHandlerProps {
  isLoggedIn: boolean
}

export function RouteHandler({ isLoggedIn }: RouteHandlerProps) {
  return (
    <Router>
      {!isLoggedIn && (
        <Switch>
          <Route path="/auth_success" component={AuthSuccess} />
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
