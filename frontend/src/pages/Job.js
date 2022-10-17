import React, { useState, useEffect,useCallback } from "react";
import { useLocation } from "react-router";
import Header from "../components/Header";
import "../index.css";

function Job() {
  const [search, setSearch] = useState("");
  const location = useLocation()
  const data = location.state.data

  return (<>
    <Header search={search} setSearch={setSearch} />
    <div className="home_container flex justify-center">
      <div className="job-details border-2">
        <p className="job-details-title">{data[0].job_title}</p>
      </div>
    </div>
    </>
  );
}

export default Job;
