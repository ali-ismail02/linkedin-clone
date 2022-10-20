import React, { useState, useEffect,useCallback } from "react";
import { useLocation } from "react-router";
import Header from "../components/Header";
import Button from "../components/Button";
import "../index.css";

function Job() {
  const [search, setSearch] = useState("");
  const location = useLocation()
  const data = location.state.data
  const profile = location.state.profile

  const onClick = () => {

  }

  const follow = () => {
    
  }

  return (<>
    <Header search={search} image={profile ? profile.user._id : null} setSearch={setSearch} />
    <div className="home_container flex justify-center">
      <div className="job-details p-8 border-2">
        <p className="job-details-title pt-3">{data[0].job_title}</p>
        <p className="job-details-location">{data[1].company_name + " . " + data[0].location + " . " + data[3]}</p>
        <ul className="list-disc list-inside pt-3">
          <li>{data[0].work_time}</li>
          <li>{data[1].company_size + " Employees . " + data[1].industry}</li>
        </ul>
        <div className="w-28  pt-3">
          <Button text={"Easy Apply"} onClick={onClick}/>
        </div>
        <p className=" pt-3">Job summary:</p>
        <p className=" p-2">{data[0].description}</p>
        <p className=" pt-3">Requirements:</p>
        <p className=" p-2">{data[0].requirements}</p>
        <div className="flex flex-col rounded-lg p-3 border-2 border-gray-300">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center">
              <img className="w-16 h-16 rounded-full" src={"http://127.0.0.1:3000/img?id="+data[2]._id}></img>
              <p className="text-lg m-4 font-bold">{data[1].company_name}</p>
            </div>
            <div className="w-28">
              <Button text={"Follow"} onClick={follow}/>
            </div>
          </div>
          <p>{data[1].industry + data[1].company_size + " Employees . "}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Job;
