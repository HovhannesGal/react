import React from "react";
import { Route , BrowserRouter , Switch , Redirect} from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

import * as ROUTES from "./constants/routes";
import Menu from "./components/Menu";

function App() {
  return (
      <BrowserRouter>
      <Menu/>
      <Switch>
      <Route path={ROUTES.LOGIN} component={Login} />
      <Route path={ROUTES.SIGN_UP} component={SignUp} />
      <Route path={ROUTES.PROFILE} component={Profile} />
      <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
      <Route path={ROUTES.NOT_FOUND} component={NotFound} />
      <Redirect to ={ROUTES.NOT_FOUND}/>
      </Switch>
      </BrowserRouter>
   
  );
}
export default App;