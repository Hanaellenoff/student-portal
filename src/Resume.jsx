export default function Resume() {
  const resume = {
    first_name: "Zach",
    last_name: "Engel",
    email: "zach@test.com",
    number: "123-456-7890",
  };
  return (
    <div>
      <h1>Resume</h1>
      <p>{resume.first_name}</p>
      <p>{resume.email}</p>
      <p>{resume.linkedin_url}</p>
    </div>
  );
}
