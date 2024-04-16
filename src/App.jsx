import "./App.css";
import { useState, useEffect } from "react";
import Capstone from "./Capstone";
import Resume from "./Resume";
import { Login } from "./Login";
import { Modal } from "./Modal";
import ResumeIndex from "./ResumeIndex";

function App() {
  const [isResumeShowVisable, setIsResumeShowVisable] = useState(false);
  const [currentResume, setCurrentResume] = useState({});
  const resume = {
    first_name: "Zach",
    last_name: "Engel",
    email: "zach@test.com",
    number: "123-456-7890",
  };

  const handleShowResume = (resume) => {
    console.log("handleShowResume", resume);
    setIsResumeShowVisable(true);
    setCurrentResume(resume);
  };
  const handleClose = () => {
    console.log("handleClose");
    setIsResumeShowVisable(false);
  };

  // useEffect;
  return (
    <div>
      <Login />
      <Capstone />
      <ResumeIndex resume={resume} onShowResume={handleShowResume} />
      <Modal show={isResumeShowVisable} onShowResume={handleShowResume} onClose={handleClose}>
        <Resume resume={resume} />
      </Modal>
    </div>
  );
}

export default App;
