import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Header from "../components/Header";
import Button from "../components/Button";
import Post from "../hooks/Fetch";
import Get from "../hooks/Get";
import "../index.css";

function Job() {
  const [search, setSearch] = useState("");
  const [follow_button, setFollow] = useState("Follow");
  const [hidden, setHide] = useState("hidden");
  const [resume, setResume] = useState(false);
  const location = useLocation()
  const data = location.state.data
  const profile = location.state.profile

  const reader = new FileReader()
  reader.addEventListener("load", () => {
    setResume(reader.result)
  })

  useEffect(() => {
    const followed = async () => {
      const result = await Get("user/followed?id=" + data[1]._id, localStorage.jwt)
      setFollow(result.data)
    }
    followed()
  }, [])

  const apply = async () => {
    const application = await Post("user/apply-job", { id: data[1]._id, resume:resume }, localStorage.jwt)
    if(application.data._id){
      setHide("hidden")
    }
  }

  const onClick = () => {
    setHide("")
  }

  const follow = async () => {
    const follow = await Post("user/follow", { id: data[1]._id }, localStorage.jwt)
    follow_button == "Follow" ? setFollow("Unfollow") : setFollow("Follow")
  }

  const uploadResume = async () => {
    reader.readAsDataURL(document.getElementById("doc").files[0]);
    document.getElementById("resume-button").classList.add("hidden")
    document.getElementById("resume-uploaded").classList.remove("hidden")
  }

  const hide = async () => {
    setHide("hidden")
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
          <Button text={"Easy Apply"} onClick={onClick} />
        </div>
        <p className=" pt-3">Job summary:</p>
        <p className=" p-2">{data[0].description}</p>
        <p className=" pt-3">Requirements:</p>
        <p className=" p-2">{data[0].requirements}</p>
        <div className="mt-3  flex flex-col rounded-lg p-3 border-2 border-gray-300">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center">
              <img className="w-16 h-16 rounded-full" src={"http://127.0.0.1:3000/img?id=" + data[2]._id}></img>
              <p className="text-lg m-4 font-bold">{data[1].company_name}</p>
            </div>
            <div className="w-28">
              <Button text={follow_button} onClick={follow} />
            </div>
          </div>
          <p>{data[1].industry + data[1].company_size + " Employees . "}</p>
        </div>
      </div>
      <div className={"fixed w-screen h-screen z-10 bg-black bg-opacity-20 flex flex-col justify-center items-center " + hidden}>
        <div className="flex p-4 justify-between bg-gray-100 max-w-lg w-full border-b-2 border-gray-300">
          <p className="text-lg">{"Apply to " + data[1].company_name}</p>
          <p className="text-xl cursor-pointer hover:bg-gray-400 rounded-full" onClick={hide}><span> X </span></p>
        </div>
        <div className="flex flex-col p-4 bg-gray-100 max-w-lg w-full border-b-2 border-gray-300">
          <p className="pt-3 font-bold">Resume</p>
          <p className="pt-3">Be sure to include an updated resume</p>
          <input onChange={uploadResume} type="file" id="doc" name="doc" accept="application/msword, .docx" className="hidden" />
          <div className="w-36 pt-3">
            <Button id="resume-button" text={<label htmlFor="doc">Upload resume</label>}/>
            <p id="resume-uploaded" className="text-xl hidden font-bold">Resume Uploaded!</p>
          </div>
        </div>
        <div className="flex justify-end p-4 bg-gray-100 max-w-lg w-full border-b-2 border-gray-300">
          <div className="w-36">
            <Button text={"Apply"} onClick={apply} />
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Job;
