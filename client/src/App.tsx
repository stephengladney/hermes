import React, { useEffect } from "react"
import { useAsync, useCookie, useToggle } from "react-use"
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom"
import { Login } from "./components/Login/Login"
import { AuthSuccess } from "./components/Auth/AuthSuccess"
import { AuthProvider } from "./contexts/authContext"
import { Dashboard } from "./components/Dashboard/Dashboard"

function App() {
  const [token, _, deleteCookie] = useCookie("hermes_token")
  const [isLoggedIn, toggleIsLoggedIn] = useToggle(false)
  const [isLoading, toggleIsLoading] = useToggle(true)

  const logOut = () => {
    deleteCookie()
    toggleIsLoggedIn(false)
  }

  useEffect(() => {
    setTimeout(() => {
      toggleIsLoading(false)
    }, 1000)
  }, [])

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
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
        <AuthProvider value={{ logOut }}>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/">
              <Redirect to="/dashboard" />
            </Route>
          </Switch>
        </AuthProvider>
      )}
    </Router>
  )
}

export default App
