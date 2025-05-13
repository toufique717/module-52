 import { useContext } from "react";
import { Authconetext } from "../provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const Privateroute = ({children}) => {
    const {user,loading} = useContext(Authconetext);
    const location = useLocation();
    console.log(location.pathname);

    //  if(loading)
    // {
    //     return <span className="loading loading-spinner loading-lg"></span>
    // }
    if (user)
    {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
     
    ;
};

export default Privateroute;