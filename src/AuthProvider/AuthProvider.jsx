import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { getAuth,createUserWithEmailAndPassword,
    onAuthStateChanged ,
    signOut,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
 } from "firebase/auth";
import app from "../Firebase/firebase.config"

export const AuthContext = createContext(null);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const [loading , setLoading]
    = useState(true);

    const createUser = (email,password) =>
    {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const SignIn = (email, password) =>
    {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = ()=>
    {
        setLoading(true)
        return signOut(auth);
    }
    const googleSignIn = () =>
    {
        return signInWithPopup(auth, provider)
    }
    useEffect(
        ()=>
        {
        const unSubscribe = onAuthStateChanged(auth,currentUser=>
            {
                console.log('user in the use: ', currentUser);
                setUser(currentUser);
                setLoading(false)
            }
            );

            return ()=>
            {
                unSubscribe();
            }

        },[])

    const AuthInfo = {
        
        user,
        createUser,
        SignIn,
        logout,
        googleSignIn,
        loading
    
    }
    return (
        <AuthContext.Provider
        value = {AuthInfo}
        >
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {

    children: PropTypes.node,
}
export default AuthProvider;