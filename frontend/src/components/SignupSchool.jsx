import '../index.css';
import Button from './Button';
import Fetch from '../hooks/Fetch';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { useState } from 'react';
import Input from './Input';
import logo from '../images/linkedin.png';



const SignupEmail = () => {
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [school, setSchool] = useState("")
    const [major, setMajor] = useState("")
    const location = useLocation()
    const nav = useNavigate()

    const onClick = async () => {
        if(!start || !end|| !school || !major){
            document.getElementById("start").style.border = "1px red solid"
            document.getElementById("end").style.border = "1px red solid"
            document.getElementById("school").style.border = "1px red solid"
            document.getElementById("major").style.border = "1px red solid"
            return
        }
        nav("/signup-work",{state:{...location.state,start:start,end:end,school:school,major:major}})
    }
    return (
        <div className='main-login'>
            <img src={logo} className="header-image"/>
            <div className='flex-col'>
                <div className='login-form'>
                    <p className='login-title'>Sign up</p>
                    <p className='login-subtitle'>Stay updated on your professional world</p>
                    <Input type={"text"} placeholder={"School"} id={"school"} value={school} onChange={(e) => setSchool(e.target.value)} />
                    <div className='flex w-100'>
                        <div className='w-45'>
                            <Input type={"number"} min={1950} max={2023} id={"start"} placeholder={"Start year"} value={start} onChange={(e) => setStart(e.target.value)} />
                        </div>
                        <div className='w-45'>
                            <Input type={"number"} min={1950} max={2030} id={"end"} placeholder={"Start year"} value={end} onChange={(e) => setEnd(e.target.value)} />
                        </div>
                    </div>
                    <Input type={"text"} placeholder={"Major"} id={"major"} value={major} onChange={(e) => setMajor(e.target.value)} />
                    <Button text={"Next"} onClick={onClick} />
                </div>
                <p className='signup-link'>already have account? <Link to="/">Sign in!</Link></p>
            </div>
            <p><br></br></p>
        </div>
    );
}

export default SignupEmail;