import '../index.css';
import Button from './Button';
import Fetch from '../hooks/Fetch';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Input from './Input';
import logo from '../images/linkedin.png';



const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nav = useNavigate()

    const onClick = async () => {
        const data = {
            "email": email,
            "password": password
        }
        const result = await Fetch("auth/login", data)
        localStorage.jwt = result.token
    }
    return (
        <div className='main-login'>
            <img src={logo} className="header-image"/>
            <div className='flex-col'>
                <div className='login-form'>
                    <p className='login-title'>Sign in</p>
                    <p className='login-subtitle'>Stay updated on your professional world</p>
                    <Input type={"text"} placeholder={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input type={"password"} placeholder={"Password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button text={"Sign in"} onClick={onClick} />
                </div>
                <p className='signup-link'>New to LinkedIn? <Link to="/signup-email">SignUp</Link></p>
            </div>
            <p><br></br></p>
        </div>
    );
}

export default Signin;