import { ResumeModal } from "./ResumeModal";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { ResumeShow } from "./ResumeShow";

import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import Capstone from "./Capstone";

export default function Content() {
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
  return (
    <div>
      <Routes>
        <Route path="/capstone" element={<Capstone />} />
      </Routes>
      <ResumeShow resume={resume} />
      <ResumeModal></ResumeModal>
    </div>
  );
}
