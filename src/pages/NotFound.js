import React, { useEffect } from "react";
import { useSiteTitle } from "../hooks/useSiteTitle";

const NotFound = () => {
  useSiteTitle("Not found");
  return <div>Hello from NotFound</div>;
};

export default NotFound;

// NotFound
// Profile
// SignUp
