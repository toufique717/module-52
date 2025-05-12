import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

 export  const Authconetext = createContext(null);

 const auth = getAuth(app);

const Authprovider = ({children}) => {

    const [user,setuser] = useState(null);

    const createuser = (email,password) =>
    {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signin = (email,password) =>
    {
        return signInWithEmailAndPassword(auth,email,password);
    }


    const logout = ()=>
    {
        return signOut(auth);
    }

    useEffect(()=>
        {
          const unsubscribe =  onAuthStateChanged(auth,currentuser=>
            {
                console.log('user in auth Statechanged',currentuser);
                setuser(currentuser)
            }
            );
         return ()=>
         {
             unsubscribe();
         }
            
        },[])

    const authinfo = {
        user,
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