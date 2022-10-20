import React, { useState } from "react";
import "../index.css";
import {useEffect} from "react"
import { AiFillLinkedin, AiFillHome } from "react-icons/ai";
import { BiSearchAlt2, BiUser } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { BsFillBellFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Get from "../hooks/Get";
import Notification from "./Notification";

function Header({ search, setSearch, image }) {
  const navigate = useNavigate();
  const [notifications,setNotif] = useState(null)
  const [count,setCount] = useState(0)
  const [x,setX] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/jobs");
  };

  useEffect(() => {
    const fetchNoti = async () => {
      const result = await Get("user/get-notifications",localStorage.jwt)
      setNotif(result.data)
      console.log(result.data)
      for(const res of result.data){
        if(res.read == 0) setCount(count + 1)
      }
    }
    fetchNoti()
  },[x])

  x == true && setX(true)

  const showNotif = () => {
    document.getElementById("notif").classList.toggle("hidden")
  }

  const goToJobs = () => {
    navigate("/home")
  }

  const onClick = async (id) => {
    let result = await Get("user/get-job?id=" + id, localStorage.jwt)
    result != null && navigate("/job", {state: {data:result.data[0]}})
  }

  const logout = async (id) => {
    localStorage.removeItem("jwt")
    navigate("/")
  }

  return (
    <div className=" header_container py-1">
      <div className="w-9/12 m-auto flex justify-between">
        <div className="left flex items-center">
          <AiFillLinkedin color="#0a66c2" size={45} />
          <form className="search_container" onSubmit={handleSubmit}>
            <input
              type="text"
              className="search_input"
              placeholder="Search by title, skill, or company"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <BiSearchAlt2 className="search_icon" />
          </form>
        </div>
        <div className="right flex items-center">
          <div onClick={goToJobs} className="nav-item flex flex-col items-center">
            <MdWork size={25} />
            <small>Jobs</small>
          </div>
          <div onClick={showNotif} className="nav-item flex relative flex-col items-center">
            <div className="w-full flex justify-center">
              <BsFillBellFill size={25} />
              {count > 0 && <p className="text-red-500">{count}</p>}
            </div>
            <small>Notifications</small>
          </div>
          <div id="notif" className="w-72 flex flex-col absolute z-10 bg-white top-14 hidden">
            {notifications != null && notifications.map(element => {
              return <Notification onClick={() => onClick(element[1]._id)} data={element}></Notification>
            })}
          </div>
          <div className="user nav-item flex flex-col items-center">
            {image ? <img src={"http://127.0.0.1:3000/img?id="+image} className="navbar-image" /> : <BiUser size={25} />}
            <small>Me</small>
          </div>
          <div className="drop-down flex flex-col justify-evenly text-center">
            <span>Profile</span>
            <span onClick={logout}>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
