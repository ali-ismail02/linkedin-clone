import React from "react";
import "../index.css";
import { AiOutlineArrowRight } from "react-icons/ai";

function JobComponent({ title, company, location, date, applicants, logo,onClick }) {
  return (
    <div className="flex justify-between job-container cursor-pointer" onClick={onClick}>
      <div className="left flex">
        <div className="logo">
          <img src={logo} className={"job-image"} />
        </div>
        <div className="details flex flex-col">
          <span className="job-title">{title}</span>
          <span className="job-company">{company}</span>
          <span className="job-location">{location}</span>
          <span className="job-date">
            {date} •
            <span className="applicants-nb"> {applicants} applicant(s)</span>
          </span>
        </div>
      </div>
      <div className="right flex items-center">
        <AiOutlineArrowRight className="cursor-pointer" />
      </div>
    </div>
  );
}

export default JobComponent;
