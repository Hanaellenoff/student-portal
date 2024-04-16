import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { Home } from "./Home";

function App() {
  const resume = {
    first_name: "Zach",
    last_name: "Engel",
    email: "zach@test.com",
    number: "123-456-7890",
  };

  const capstone = {
    linkedin_url: "linkedin.url",
    twitter_handle: "twitter.url",
    github_url: "github.url",
  };
  return (
    <div>
      <h1>Resume</h1>
      <p>{resume.first_name}</p>
      <p>{resume.email}</p>
      <p>{resume.linkedin_url}</p>
      <h1>Capstone</h1>
      <p>{capstone.linkedin_url}</p>
      <p>{capstone.twitter_handle}</p>
      <p>{capstone.github_url}</p>
    </div>
  );
}

export default App;
