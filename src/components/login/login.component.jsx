import React from 'react';

import './login.styles.scss';

const Login = () => {
    return ( 
        <div className="login-form">
            <form>
                <h1> Login </h1>
                <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" id="email"  placeholder="Enter email" />
                </div>
                <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-info">Submit</button>
            </form>  
        </div>  
     );
}
 
export default Login;