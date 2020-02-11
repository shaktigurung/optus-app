import React from 'react'

import LoginForm from './../../components/login-form/login-form.component';
import GoogleSignIn from './../../components/google-sign-in/google-sign-in.component';

import './login-page.styles.scss';

const LoginPage = () => {
    return ( 
        <div className="login-page">
            <LoginForm/>
            <GoogleSignIn />
        </div>
     );
}
 
export default LoginPage;