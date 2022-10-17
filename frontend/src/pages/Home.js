import JobComponent from "../components/JobComponent"
import React, { useState, useEffect,useCallback } from "react";
import Header from "../components/Header";
import logo from "../images/logo.png";
import Get from "../hooks/Get"
import "../index.css";
import { useNavigate } from "react-router";

function Home() {
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);
  const [x, setX] = useState(false);
  const nav = useNavigate()
  
  useEffect(() => {
    const fetchJobs = async () => {
      const result = await Get("user/get-jobs",localStorage.jwt)
      setJobs(result.data)
      console.log(result.data)
    }
    fetchJobs()
  },[x])

  x == true && setX(true)

  const onClick = (data) => {
    nav("/job", {state: {data:data}})
  }

  return (<>
    <Header search={search} setSearch={setSearch} />
    <div className="home_container flex justify-center">
      <div className="jobs-container">
        <div className="title">Recommended For You</div>
        <div className="subtitle">Based on your profile</div>
        {jobs ? Object.entries(jobs).map(([key, value]) => {
            return (<JobComponent key={key} onClick={()=> {onClick(value)}}
            title={value[0].job_title}
            company={value[1].company_name}
            location={value[0].location}
            date={"1 day ago"}
            applicants={value[3]}
            logo={"http://127.0.0.1:3000/img?id="+value[2]._id}
          />)
        }):console.log("hi")}
      </div>
    </div>
    </>
  );
}

export default Home;
