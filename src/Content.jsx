import { ResumeModal } from "./ResumeModal";

import { ResumeShow } from "./ResumeShow";
// import { Routes, Route } from "react-router-dom";

import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";


export function Content() {
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
      <ResumeShow resume={resume} />
      <ResumeModal></ResumeModal>
    </div>
  );
}
