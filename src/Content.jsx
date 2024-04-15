import { ResumeModal } from "./ResumeModal";
import { LoginModal } from "./LoginModal";
import { useState } from "react";
import { Login } from "./Login";

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
      <ResumeModal show={true}>
        <h1>test</h1>
      </ResumeModal>
      <LoginModal show={isLoginShowVisible}>
        <Login />
      </LoginModal>
    </div>
  );
}
