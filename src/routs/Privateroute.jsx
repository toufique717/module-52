 import { useContext } from "react";
import { Authconetext } from "../provider/Authprovider";
import { Navigate } from "react-router-dom";


const Privateroute = ({children}) => {
    const {user,loading} = useContext(Authconetext);

    if(loading)
    {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user)
    {
        return children;
    }

    return <Navigate to="/login"></Navigate>
    return (
        <div>
            
        </div>
    );
};

export default Privateroute;