import React from "react";
import "../index.css";
import { AiFillLinkedin, AiFillHome } from "react-icons/ai";
import { BiSearchAlt2, BiUser } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { BsFillBellFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Header({ search, setSearch, image }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/jobs");
  };

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
          <div className="nav-item flex flex-col items-center">
            <AiFillHome size={25} />
            <small>Home</small>
          </div>
          <div className="nav-item flex flex-col items-center">
            <MdWork size={25} />
            <small>Jobs</small>
          </div>
          <div className="nav-item flex flex-col items-center">
            <BsFillBellFill size={25} />
            <small>Notifications</small>
          </div>
          <div className="user nav-item flex flex-col items-center">
            {image ? <img src={"http://127.0.0.1:3000/img?id="+image} className="navbar-image" /> : <BiUser size={25} />}
            <small>Me</small>
          </div>
          <div className="drop-down flex flex-col justify-evenly text-center">
            <span>Profile</span>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
