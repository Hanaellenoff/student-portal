import "./App.css";
import Capstone from "./Capstone";
import Resume from "./Resume";
import { Login } from "./Login";
import User from "./User";

function App() {
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
  return (
    <div>
      <Login />
      <User user={user} />
      <Capstone capstone={capstone} />
      <Resume />
    </div>
  );
}

export default App;
