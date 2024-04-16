import axios from "axios";
import { useState, useEffect } from "react";
import { ResumeModal } from "./ResumeModal";
import { Routes, Route } from "react-router-dom";
import { ResumeShow } from "./ResumeShow";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import Capstone from "./Capstone";

export function Content() {
  const [isResumeShowVisable, setIsResumeShowVisable] = useState(false);
  const [currentResume, setCurrentResume] = useState({});
  const resume = [
    {
      id: 1,
      link: "google.com",
    },
    {
      id: 2,
      link: "amazon.com",
    },
  ];
  const handleShowResume = () => {
    console.log("handleshowresume");
    setIsResumeShowVisable(true);
    setCurrentResume(resume);
  };

  const handleClose = () => {
    setIsResumeShowVisable(false);
  };

  return (
    <div>
<<<<<<< HEAD
      {/* <ResumeShow resume={resume} />
        <Route path="/resume" element={<ResumeShow resume={resume} onShowResume={handleShowResume} />} />
      </Routes>
      <ResumeModal></ResumeModal> */}
=======
      <ResumeShow resume={resume} onShowResume={handleShowResume} />
      <ResumeModal show={isResumeShowVisable} onClose={handleClose}></ResumeModal>
>>>>>>> 0e6f9b106409d1f7b078add6fa4999136253ff48
    </div>
  );
}
