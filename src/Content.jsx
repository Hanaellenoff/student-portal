import { ResumeModal } from "./ResumeModal";
import { LoginModal } from "./LoginModal";
import { useState } from "react";
import { Login } from "./Login";

import { ResumeShow } from "./ResumeShow";
// import { Routes, Route } from "react-router-dom";

import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";


export function Content() {
  const [isLoginShowVisible, setIsLoginShowVisible] = useState(false);

  const handleShowLogin = () => {
    setIsLoginShowVisible(true);
  };

  const handleClose = () => {
    setIsLoginShowVisible(false);
  };

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
<<<<<<< HEAD
      <ResumeModal show={true}>
        <h1>test</h1>
      </ResumeModal>
      <LoginModal show={isLoginShowVisible}>
        <Login />
      </LoginModal>
=======
      <ResumeShow resume={resume} />
      <ResumeModal></ResumeModal>
>>>>>>> 7bf38ed791c5516c8e600f2855e87b0bb2ccc788
    </div>
  );
}
