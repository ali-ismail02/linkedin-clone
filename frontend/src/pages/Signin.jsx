import '../index.css';
import Button from '../components/Button';
import Post from '../hooks/Fetch';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Input from '../components/Input';
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
        const result = await Post("auth/login", data)
        localStorage.jwt = result.data.token
        if(result.data.type == "Job Seeker"){
            console.log(result)
            nav("/home")
        }
        if(result.data.message){
            document.getElementById("email").classList.add("border-red-600")
            document.getElementById("password").classList.add("border-red-600")
            document.getElementById("message").classList.remove("hidden")
        }
    }
    return (
        <div className='main-login'>
            <img src={logo} className="header-image"/>
            <div className='flex-col-allign'>
                <div className='login-form'>
                    <p className='login-title'>Sign in</p>
                    <p className='login-subtitle'>Stay updated on your professional world</p>
                    <Input type={"text"} id={"email"} placeholder={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input type={"password"} id={"password"} placeholder={"Password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <p className='hidden text-red' id={"message"}>Invalid credntials</p>
                    <Button text={"Sign in"} onClick={onClick} />
                </div>
                <p className='signup-link'>New to LinkedIn? <Link to="/signup-email">SignUp</Link></p>
            </div>
            <p><br></br></p>
        </div>
    );
}

export default Signin;