import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

 export  const Authconetext = createContext(null);

 const auth = getAuth(app);

const Authprovider = ({children}) => {

    const [user,setuser] = useState(null);
    const [loading, setloading] = useState(true);

    const createuser = (email,password) =>
    {
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signin = (email,password) =>
    {
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }


    const logout = ()=>
    {
        setloading(true);
        return signOut(auth);
    }

    useEffect(()=>
        {
          const unsubscribe =  onAuthStateChanged(auth,currentuser=>
            {
                console.log('user in auth Statechanged',currentuser);
                setuser(currentuser)
                setloading(true);
            }
            );
         return ()=>
         {
             unsubscribe();
         }
            
        },[])

    const authinfo = {
        user,
        loading,
        createuser,
        signin,
        logout
    }
    return (
        <Authconetext.Provider value={authinfo}>

            {children}

        </Authconetext.Provider>
    );
};

export default Authprovider;