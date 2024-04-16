import "./App.css";
import { useState } from "react";
import User from "./User";
import Capstone from "./Capstone";
import Resume from "./Resume";
import { Login } from "./Login";
// import User from "./User";
import { Modal } from "./Modal";
import ResumeIndex from "./ResumeIndex";
import CapstoneIndex from "./CapstoneIndex";

function App() {
  const [isResumeShowVisable, setIsResumeShowVisable] = useState(false);
  const [currentResume, setCurrentResume] = useState({});
  const [IsCapstoneShowVisable, setIsCapstoneShowVisable] = useState(false);
  const [currentCapstone, setCurrentCapstone] = useState({});

  const resume = {
    first_name: "Zach",
    last_name: "Engel",
    email: "zach@test.com",
    number: "123-456-7890",
  };
  const capstone = {
    name: "Cool Project",
    description: "This is how the project works and how I did it.",
    url: "capstone.url",
    screenshot: "screenshot image",
  };

  const user = {
    first_name: "Zach",
    last_name: "Engel",
    phone_number: "123-456-7890",
    email: "test@email.com",
    short_bio: "Example bio",
    linkedin_url: "linkedin.com",
    twitter_handle: "twitter.com",
    personal_url: "personal.com",
    github_url: "github.com",
    photo: "photo",
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

  const handleShowCapstone = (capstone) => {
    console.log("handleShowCapstone", capstone);
    setIsCapstoneShowVisable(true);
    setCurrentCapstone(capstone);
  };
  const handleCloseCapstone = () => {
    console.log("handleClose");
    setIsCapstoneShowVisable(false);
  };

  // useEffect;
  return (
    <div className="home">
      <Login />
      <User user={user} />
      <CapstoneIndex capstone={capstone} onShowCapstone={handleShowCapstone} />
      <ResumeIndex resume={resume} onShowResume={handleShowResume} />
      <Modal show={IsCapstoneShowVisable} onShowCapstone={handleShowCapstone} onClose={handleCloseCapstone}>
        <Capstone capstone={capstone} />
      </Modal>
      <Modal show={isResumeShowVisable} onShowResume={handleShowResume} onClose={handleClose}>
        <Resume resume={currentResume} />
      </Modal>
    </div>
  );
}

export default App;
