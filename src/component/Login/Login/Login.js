import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    // const { signInUsingGoogle } = useFirebase();
    const { signInUsingGoogle, processLogin } = useAuth();
    return (
        <div className="m-5">
            <h2>Please SignIn</h2>
            <form onSubmit={processLogin}>
                <input type="email" name="" id="" placeholder="Enter email" />
                <br />
                <input type="password" name="" id="" placeholder="Enter password" />
                <br />
                <input type="submit" value="submit" />
            </form>
            <p className="text-dark">New at ema store? <Link to="/register">Create Account</Link> </p>
            <br />-----------------or---------------<br /><br />
            <button onClick={signInUsingGoogle} className="btn btn-warning">GoogleSignIn</button>
        </div>
    );
};

export default Login;