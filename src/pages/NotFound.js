import React from "react"
import {useSiteTitle} from "../hooks/useSiteTitle"

const NotFound = () => {
    useSiteTitle("NotFound");
    return <div>Hello From NotFound</div>
};

export default NotFound;