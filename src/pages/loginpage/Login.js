import React from 'react';
import './Login.css'; 
import Icons from '../../assets/icons/Icons.png';
import Google from '../../assets/signin/Google Sign In.png';
import Apple from '../../assets/signin/Apple Sign In.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='container'>
      <div className='left'>
        <div className='logo'>LOGO</div>
        <div className='board'>Board.</div>
        <div className='icons'>
          <img src={Icons} alt="Icons" />
        </div>
      </div>

      <div className='right'>
        <div className='login'>
          <div className='header'>
            <span>Sign In</span>
            <span>Sign in to your account</span>
          </div>
          <div className='website'>
            <img src={Google}></img>
            <img src={Apple}></img>
          </div>
          <div className='form'>
            <div className='form-group'>
              <label htmlFor='email'>Email address</label>
              <input type='email' id='email' placeholder='Enter your email' />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' placeholder='Enter your password' />
            </div>
          </div>
          <div className='forgot-password'>
            <a href='#'>Forgot password?</a>
          </div>
          <div className='login-button'>
            <Link to="/dashboard">
              <button>Sign In</button>
            </Link>
          </div>
          <div className='register-link'>
            <span>Don't have an account? <a href='#'>Register here.</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
