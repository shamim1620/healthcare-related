import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle, handleEmailChange,
        handlePasswordChange,
        registerNewUser } = useAuth();
    return (
        <div className="register-form m-4">
            <div>
                <h2>Register here</h2>
                <form onSubmit={registerNewUser} >
                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Enter your email" />
                    <br />
                    <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Password" />
                    <br />
                    {/* <input type="password" name="" id="" placeholder="Re-enter password" /> */}
                    <br />
                    <input type="submit" value="Submit" />
                    <br />
                </form>
                <p className="text-dark"> Already register ? <Link to="/login">SignIn</Link></p>
                <br />-------or----- <br />
                <button onClick={signInUsingGoogle} className="btn btn-warning">Google SignIn</button>
            </div>
        </div>
    );
};

export default Register;