import '../index.css';
import Button from '../components/Button';
import Fetch from '../hooks/Fetch';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { useState } from 'react';
import Input from '../components/Input';
import logo from '../images/linkedin.png';



const SignupWork = () => {
    const [title, setTitle] = useState("")
    const [exp, setExp] = useState("")
    const [seeking, setSeeking] = useState("")
    const [seeking_location, setSeekingLocation] = useState("")
    const [company, setCompany] = useState("")
    const location = useLocation()
    const nav = useNavigate()

    const onClick = async () => {
        if (!title || !exp) {
            document.getElementById("title").style.border = "1px red solid"
            document.getElementById("exp").style.border = "1px red solid"
            return
        }
        const array = new Array()
        array.push(seeking_location)
        const data = ({
            "first_name": location.state.fn,
            "last_name": location.state.ln,
            "location": location.state.location,
            "company_name": company,
            "seeking": seeking,
            "seeking_locations": array,
            "resume": null,
            "email": location.state.email,
            "password": location.state.password,
            "school": location.state.school,
            "start_year": location.state.start,
            "end_year": location.state.end,
            "major": location.state.major,
            "exp": exp,
            "prev_job": title,
            "user_type":2
        })
        const result = await Fetch("auth/signup", data)
        if(result._id){
            const data = {
                "email": location.state.email,
                "password": location.state.password
            }
            const result = await Fetch("auth/login", data)
            localStorage.jwt = result.token
            nav("/home")
        }
    }
    return (
        <div className='main-login'>
            <img src={logo} className="header-image" />
            <div className='flex-col'>
                <div className='login-form'>
                    <p className='login-title'>Sign up</p>
                    <p className='login-subtitle'>Stay updated on your professional world</p>
                    <Input type={"text"} placeholder={"Company"} id={"company"} value={company} onChange={(e) => setCompany(e.target.value)} />
                    <Input type={"text"} placeholder={"Job Title"} id={"title"} value={title} onChange={(e) => setTitle(e.target.value)} />
                    <Input type={"number"} min={1} max={50} id={"exp"} placeholder={"Experience"} value={exp} onChange={(e) => setExp(e.target.value)} />
                    <Input type={"text"} placeholder={"Seeking Job"} id={"seeking"} value={seeking} onChange={(e) => setSeeking(e.target.value)} />
                    <Input type={"text"} placeholder={"Location"} id={"seeking-location"} value={seeking_location} onChange={(e) => setSeekingLocation(e.target.value)} />
                    <Button text={"Sign up"} onClick={onClick} />
                </div>
                <p className='signup-link'>already have account? <Link to="/">Sign in!</Link></p>
            </div>
            <p><br></br></p>
        </div>
    );
}

export default SignupWork;