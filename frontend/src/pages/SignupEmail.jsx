import '../index.css';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Input from '../components/Input';
import logo from '../images/linkedin.png';



const SignupEmail = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fn, setFn] = useState("")
    const [ln, setLn] = useState("")
    const [location, setLocation] = useState("")
    const nav = useNavigate()

    const onClick = async () => {
        if(!email || !password || !fn || !ln){
            document.getElementById("email").style.border = "1px red solid"
            document.getElementById("password").style.border = "1px red solid"
            document.getElementById("fn").style.border = "1px red solid"
            document.getElementById("ln").style.border = "1px red solid"
            document.getElementById("location").style.border = "1px red solid"
            return
        }
        const data = {location:location,fn:fn,ln:ln,email:email,password:password}
        nav("/signup-school", {state:data})
    }
    return (
        <div className='main-login'>
            <img src={logo} className="header-image"/>
            <div className='flex-col-allign'>
                <div className='login-form'>
                    <p className='login-title'>Sign up</p>
                    <p className='login-subtitle'>Stay updated on your professional world</p>
                    <Input type={"text"} placeholder={"First Name"} id={"fn"} value={fn} onChange={(e) => setFn(e.target.value)} />
                    <Input type={"text"} placeholder={"Last Name"} id={"ln"} value={ln} onChange={(e) => setLn(e.target.value)} />
                    <Input type={"text"} placeholder={"Country"} id={"location"} value={location} onChange={(e) => setLocation(e.target.value)} />
                    <Input type={"text"} placeholder={"Email"} id={"email"} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input type={"password"} placeholder={"Password"} id={"password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button text={"Next"} onClick={onClick} />
                </div>
                <p className='signup-link'>already have account? <Link to="/">Sign in!</Link></p>
            </div>
            <p><br></br></p>
        </div>
    );
}

export default SignupEmail;