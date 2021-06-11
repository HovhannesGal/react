import React from "react";
import {useSiteTitle} from "../hooks/useSiteTitle"

const Dashboard = () => {
    useSiteTitle("Dashboard");
    return <div>Hello From Dashboard</div>
};

export default Dashboard;