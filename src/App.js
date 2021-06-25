import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

import * as ROUTES from "./constants/routes";
import useAuthListener from "./hooks/useAuthListener";
import UserContext from "./context/user";

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <BrowserRouter>
        <Switch>
          <LoggedInRoute
            user={user}
            path={ROUTES.LOGIN}
            loggedInPath={ROUTES.DASHBOARD}
            component={Login}
          />
          <LoggedInRoute
            user={user}
            path={ROUTES.SIGN_UP}
            loggedInPath={ROUTES.DASHBOARD}
            component={SignUp}
          />

          <PrivateRoute
            user={user}
            path={ROUTES.PROFILE}
            component={Profile}
          />
          <PrivateRoute
            user={user}
            exact
            path={ROUTES.DASHBOARD}
            component={Dashboard}
          />

          <Route path={ROUTES.NOT_FOUND} component={NotFound} />
          <Redirect to={ROUTES.NOT_FOUND} />

          <LoggedInRoute user={user} path="asfsaf" component={<div></div>} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

const LoggedInRoute = ({ user, path, loggedInPath, component }) => {
  if (user) {
    return <Redirect to={loggedInPath} />;
  }
  return <Route path={path} component={component} />;
};

const PrivateRoute = ({
  user,
  path,
  component,
  ...routeProps // 
}) => {
  if (!user) {
    return <Redirect to={ROUTES.LOGIN} />;
  }

  return <Route path={path} component={component} {...routeProps} />;
};

// --- redirect logic
// localhost:3000/blablabla
// 1. switch
// 2. default redirect => 'not-found'

// 3. localhost:3000/not-found
// 4. switch
// 5. done

export default App;
