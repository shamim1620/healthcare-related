import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { useEffect, useState } from "react";
import initilizationauthentication from "../component/Login/Firebase/firebase.init";

initilizationauthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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

    };
    const handleEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);

    }

    const handlePasswordChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }


    const registerNewUser = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setUser(result.user);

                setError('');
            }).catch(error => {
                console.log(error.message);
                setError(error.message);
            })

    }


    const processLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                console.log('login succesfull')
                setUser(result.user);
                setError('');
            }).catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }


    return {

        signInUsingGoogle,
        logout,
        user,
        processLogin,
        handleEmailChange,
        handlePasswordChange,
        registerNewUser
    }

}
export default useFirebase;