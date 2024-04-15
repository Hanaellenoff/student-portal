import axios from "axios";
import { useState, useEffect } from "react";
import { ResumeModal } from "./ResumeModal";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { ResumeShow } from "./ResumeShow";

import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";





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

  const handleClose = () => {};
  return (
    <div>
      <Routes>
        <Route path="/resume" element={<ResumeShow resume={resume} onShowResume={handleShowResume} />} />
      </Routes>
      <ResumeModal></ResumeModal>
    </div>
  );
}
