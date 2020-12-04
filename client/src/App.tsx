import React, { Fragment, useEffect } from "react"
import { Login } from "./components/Login/Login"
import { Logout } from "./components/Logout/Logout"
import { Dashboard } from "./components/Dashboard/Dashboard"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useCookie, useToggle } from "react-use"

function App() {
  const [token, _, deleteCookie] = useCookie("hermes_token")
  const [isLoggedIn, toggleIsLoggedIn] = useToggle(true)
  const [isLoading, toggleIsLoading] = useToggle(false)

  useEffect(() => {
    if (token) {
      toggleIsLoading(true)
      setTimeout(() => {
        toggleIsLoading(false)
      }, 2000)
    }
  })

  return (
    <Router>
      {isLoading ? (
        <h1 style={{ marginTop: 400, textAlign: "center" }}>
          (Checking token's autenticity)
        </h1>
      ) : (
        <Fragment>
          {isLoggedIn && (
            <Switch>
              <Route path="/logout">
                <Logout
                  deleteCookie={deleteCookie}
                  toggleIsLoggedIn={toggleIsLoggedIn}
                />
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          )}
          {!isLoggedIn && <Login />}
        </Fragment>
      )}
    </Router>
  )
}

export default App
