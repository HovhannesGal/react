import  {useEffect} from "react"
import { useSiteTitle } from "../hooks/useSiteTitle";


const Profile = () => {
    useSiteTitle("Profile");
    return <div>Hello From Profile</div>
};

export default Profile;