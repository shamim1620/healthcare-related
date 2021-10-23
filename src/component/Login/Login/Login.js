import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    // const { signInUsingGoogle } = useFirebase();
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="m-5">
            <button onClick={signInUsingGoogle} className="btn btn-warning">GoogleSignIn</button>
        </div>
    );
};

export default Login;