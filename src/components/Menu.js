import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
const Menu = () => {
  return (
    <div>
      <ul class="list-decimal mb-10">
        <li>
          <Link to={ROUTES.LOGIN}>Login</Link>
          {/* <a href="/login">Login</a> */}
        </li>
        <li>
          <Link to={ROUTES.PROFILE}>Profil</Link>
        </li>
        <li>
          <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_UP}>SignUp</Link>
        </li>
      </ul>
    </div>
  );
};
export default Menu;