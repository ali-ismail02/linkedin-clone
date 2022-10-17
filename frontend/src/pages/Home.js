import React from "react";
import JobComponent from "../components/JobComponent";
import logo from "../images/logo.png";
import "../index.css";

function Home() {
  return (
    <div className="home_container flex justify-center">
      <div className="jobs-container">
        <div className="title">Recommended For You</div>
        <div className="subtitle">Based on your profile</div>
        <JobComponent
          title={"Full Stack Developer"}
          company={"Ailo"}
          location={"Australia"}
          date={"1 day ago"}
          applicants={5}
          logo={logo}
        />
        <JobComponent
          title={"React Developer"}
          company={"Ailo"}
          location={"Australia"}
          date={"1 day ago"}
          applicants={16}
          logo={logo}
        />
        <JobComponent
          title={"Backend Developer"}
          company={"Ailo"}
          location={"Australia"}
          date={"1 day ago"}
          applicants={2}
          logo={logo}
        />
        <JobComponent
          title={"Flutter Developer"}
          company={"Ailo"}
          location={"Australia"}
          date={"1 day ago"}
          applicants={3}
          logo={logo}
        />
        <JobComponent
          title={"Full Stack Developer"}
          company={"Ailo"}
          location={"Australia"}
          date={"1 day ago"}
          applicants={8}
          logo={logo}
        />
      </div>
    </div>
  );
}

export default Home;
