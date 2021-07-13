import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Header from "../components/Header";
import { useSiteTitle } from "../hooks/useSiteTitle";
import * as ROUTES from "../constants/routes";
import { getUserByUsername } from "../services/firebase";
const Profile = () => {
  useSiteTitle("Profile");
  const { username } = useParams();
  const history = useHistory();
  const [userExists, setUserExists] = useState(false);
  useEffect(() => {
    async function checkUserExistsToLoadProfile() {
      const doesUserExist = await getUserByUsername(username);
      if (!doesUserExist) {
        history.push(ROUTES.NOT_FOUND);
      } else {
        setUserExists(true);
      }
    }
    checkUserExistsToLoadProfile();
  }, [history, username]);
  return userExists ? (
    <div className="bg-gray">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        {/* <UserProfile username={username} /> */}
      </div>
    </div>
  ) : null;
};
export default Profile;
// Profile
// SignUp