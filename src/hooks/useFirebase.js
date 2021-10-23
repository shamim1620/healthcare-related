import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

import { useEffect, useState } from "react";
import initilizationauthentication from "../component/Login/Firebase/firebase.init";

initilizationauthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});

    const signInUsingGoogle = () => {
        const GoogleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                setUser(result.user);
            });

    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribe;

    }, []);
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser("");
            });

    }
    return {

        signInUsingGoogle,
        logout,
        user,
    }

}
export default useFirebase;